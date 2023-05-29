const postgres = require('postgres');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const sql = postgres(URL, { ssl: 'require' });

module.exports = async (req, res) => {
  try {
    const riderList = await sql`
      select id, name, "group" from ridervw
    `;
    res.status(200).json(riderList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};