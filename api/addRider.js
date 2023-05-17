const { google } = require('googleapis');

const auth = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
  ['https://www.googleapis.com/auth/spreadsheets'],
);

const sheets = google.sheets({ version: 'v4', auth });

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const riderName = req.query.riderName;
    const riderId = req.query.riderId;
    const checkinDate = req.query.checkinDate;
    const riderLocation = req.query.riderLocation;
    try {
        const { data } = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.SPREADSHEET_ID,
          range: process.env.SPREADSHEET_SHEET,
        });

        // console.log(req.query)
        // console.log(data.values)

        // Check if rider already exists
        const existingRider = data.values.find(
            row => row[1] === riderId && row[0] === checkinDate
        );
  
        if (existingRider) {
            return res.status(201).json({ message: 'Rider already exists' });
        }
  
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: process.env.SPREADSHEET_SHEET,
            valueInputOption: 'RAW',
            resource: {
              values: [[ checkinDate, riderId, riderName, riderLocation]],
            },
          });

        res.status(201).json({ message: 'Rider added successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  else {
    res.status(405).json({ error: 'Only POST method is allowed' });
  }
};
    


