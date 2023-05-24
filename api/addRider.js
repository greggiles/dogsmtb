const postgres = require('postgres');
require('dotenv').config();
const util = require('util');

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

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(URL, { ssl: 'require' });

async function checkin(id, date, location, time, park) {
    const checkin = await sql`
      INSERT into checkins (rider_id, date, location, time, park)
      VALUES (${ id }, ${ date }, ${ location }, ${ time }, ${ park } )
      ON CONFLICT (rider_id, date) DO UPDATE
      set location = EXCLUDED.location, time = EXCLUDED.time, park = EXCLUDED.park
      RETURNING *
    `
  //    RETURNING rider_id, date, location
  
    console.log(checkin);
    return checkin
}

  module.exports = async (req, res) => {
    if (req.method === 'POST') {
      const riderName = req.query.riderName;
      const riderId = req.query.riderId;
      const checkinDate = req.query.checkinDate;
      const riderLocation = req.query.riderLocation;
      const checkinTime = req.query.checkinTime;
      var park = 'Unsure';
  
      try {
          const riderLoc = JSON.parse(riderLocation);

          console.log(riderLoc);

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
    
          console.log(riderId, checkinDate, riderLocation, checkinTime, park);
  
          await checkin( riderId, checkinDate, riderLocation, checkinTime, park );
  
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