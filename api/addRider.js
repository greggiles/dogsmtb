const { google } = require('googleapis');

const auth = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
  ['https://www.googleapis.com/auth/spreadsheets'],
);

const ilra = { 'lat': 42.506778, "long": -83.737241 };
const bra = { 'lat': 42.501520, "long": -83.835931 };

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const sheets = google.sheets({ version: 'v4', auth });

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const riderName = req.query.riderName;
    const riderId = req.query.riderId;
    const checkinDate = req.query.checkinDate;
    const riderLocation = req.query.riderLocation;
    const checkinTime = req.query.checkinTime;
    var park = 'Unsure';

    try {
        const { data } = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.SPREADSHEET_ID,
          range: process.env.SPREADSHEET_SHEET,
        });

        console.log(req.query)
        // console.log(data.values)

        // Check if rider already exists
        const existingRider = data.values.find(
            row => row[1] === riderId && row[0] === checkinDate
        );
  
        if (existingRider) {
            return res.status(201).json({ message: 'Rider already exists' });
        }

        const riderLoc = JSON.parse(riderLocation);
        const distfromILRA = getDistanceFromLatLonInKm(ilra.lat, ilra.long, riderLoc.lat, riderLoc.long).toFixed(1);
        const distfromBRA = getDistanceFromLatLonInKm(bra.lat, bra.long, riderLoc.lat, riderLoc.long).toFixed(1);
        
        console.log(riderLoc, distfromILRA, distfromBRA);

        if (distfromILRA <= distfromBRA) { 
          if (distfromILRA < 1) {
            park = 'ILRA';
          }
          else {
            park = distfromILRA + 'km from ILRA';
          }
        }
        else {
          if (distfromBRA < 1)
            park = 'BRA';
          else 
            park = distfromILRA + 'km from BRA';

        }
  
        console.log(riderLocation);

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: process.env.SPREADSHEET_SHEET,
            valueInputOption: 'RAW',
            resource: {
              values: [[ checkinDate, riderId, riderName, riderLocation, checkinTime, park]],
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
    


