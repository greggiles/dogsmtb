const postgres = require('postgres');

const ilra = { 'lat': 42.506778, "long": -83.737241 };
const bra = { 'lat': 42.501520, "long": -83.835931 };

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(URL, { ssl: 'require' });

module.exports = async (req, res) => {
  console.log('Found addRiders!')
  if (req.method === 'POST') {
    const ids = req.query.ids;
    const location = req.query.location;
    const ts = req.query.ts;
    var park = 'Unsure';

    try {
      const riderLoc = JSON.parse(location);
      const distfromILRA = getDistanceFromLatLonInKm(ilra.lat, ilra.long, riderLoc.lat, riderLoc.long).toFixed(1);
      const distfromBRA = getDistanceFromLatLonInKm(bra.lat, bra.long, riderLoc.lat, riderLoc.long).toFixed(1);
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
      console.log(ids, location, ts, park);

      const riderIds = ids.split(','); 

      const values = riderIds.map((id, index) => {
        // Generating placeholders
        const offset = index * 4;
        return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`;
      }).join(', ');

      var params = [];
      var idx = 0;
      riderIds.forEach(id => {
        params[idx + 0] = id;
        params[idx + 1] = ts;
        params[idx + 2] = location;
        params[idx + 3] = park;
        idx = idx + 4;
      });

      console.log(params);
      console.log(values);

      const query = `
          INSERT INTO checkinlog (rider_id, ts, location, park)
          VALUES ${values}
          ON CONFLICT (id) DO UPDATE
          SET ts = EXCLUDED.ts, location = EXCLUDED.location, park = EXCLUDED.park
        `;

      await sql.unsafe(query, params);

      res.status(201).json({ message: 'Rider added successfully' });

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  else {
    res.status(405).json({ error: 'Only POST method is allowed' });
  }
};