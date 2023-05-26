const { generate } = require('@vue/compiler-core');
const postgres = require('postgres');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const sql = postgres(URL, { ssl: 'require' });

module.exports = async (req, res) => {
  var riderList = {};
  console.log(req.query.date);
  try {
    if (req.query.date) {
    const date = req.query.date;
      riderList = await sql`
        select *, date(ts) as date, ts::time as time from checkinview
        where date(ts) = ${ date }
        order by ts desc;
      `;
    }
    else {
      riderList = await sql`
        select *, date(ts) as date, ts::time as time from checkinview 
        order by ts desc;
      `;
    }
  
    for(var i=0; i< riderList.length; i++) {
      var date = new Date(riderList[i].ts);
      riderList[i].date = date.getMonth()+1 + '-' + date.getUTCDate() + '-' + date.getFullYear();
    }

    res.status(200).json(riderList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};