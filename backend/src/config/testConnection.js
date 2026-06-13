const pool = require("./db");
require("dotenv").config();

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Database Connected ✅");
    console.log(res.rows[0]);
  } catch (error) {
    console.error("Database Connection Failed ❌");
    console.error(error.message);
  }
}

testConnection();