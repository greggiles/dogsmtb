const { google } = require('googleapis');
console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
const auth = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
  ['https://www.googleapis.com/auth/spreadsheets'],
);

const sheets = google.sheets({ version: 'v4', auth });

module.exports = async (req, res) => {
  try {
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.RIDER_RANGE,
    });

    res.status(200).json({ data: data.values });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};