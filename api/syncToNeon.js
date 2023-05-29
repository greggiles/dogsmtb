const { google } = require('googleapis');
const postgres = require('postgres');

const auth = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
  ['https://www.googleapis.com/auth/spreadsheets'],
);
const sheets = google.sheets({ version: 'v4', auth });

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const db = postgres(URL, { ssl: 'require' });

module.exports = async (req, res) => {
  try {
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.RIDER_RANGE,
    });

    data.values.shift();
    data.values.shift();
    data.values.shift();
    
    var riders=[]
    data.values.forEach((rider) => {
      if (rider[0].length > 0) {
        const id = Number(rider[0]);
        const name = rider[1];
        const type = rider[2];
        const group = Number(rider[8]);
        var grade = null;
        if (rider[5]) {
          grade = Number(rider[5]);
        }
        else {
          grade = null;
        }
        riders.push([id, name, type, grade, group]);
      }
    })

    const values = riders.map(([id, name, type, grade, group], index) => {
      // Generating placeholders
      const offset = index * 5;
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5})`;
    }).join(', ');

    const params = riders.flat();
    const query = `
      INSERT INTO riders (id, name, type, grade, group_id)
      VALUES ${values}
      ON CONFLICT (id) DO UPDATE
      SET name = EXCLUDED.name, type = EXCLUDED.type, grade = EXCLUDED.grade, group_id = EXCLUDED.group_id
    `;
  
    await db.unsafe(query, params);

   res.status(201).json({ message: `${riders.length} Riders syncd successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};