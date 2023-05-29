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
      range: process.env.GROUP_RANGE,
    });

    console.log(process.env.GROUP_RANGE);

    console.log(data);

    var groups=[];
    data.values.forEach((group) => {
      if (group[0].length > 0) {
        const id = Number(group[0]);
        const name = group[1];
        groups.push([id, name]);
      }
    });

    const groupValues = groups.map(([id, name], index) => {
      // Generating placeholders
      const offset = index * 2;
      return `($${offset + 1}, $${offset + 2})`;
    }).join(', ');

    const groupParams = groups.flat();
    const groupQuery = `
      INSERT INTO groups (id, name)
      VALUES ${groupValues}
      ON CONFLICT (id) DO UPDATE
      SET name = EXCLUDED.name
    `;
  
    await db.unsafe(groupQuery, groupParams);


   res.status(201).json({ message: `${groups.length} Groups syncd successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};