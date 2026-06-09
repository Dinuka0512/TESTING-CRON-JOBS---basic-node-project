const mysql = require("mysql2");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0512",   // your MySQL password
  database: "test"
});

// connect
db.connect((err) => {
  if (err) {
    console.log("DB connection failed ❌", err);
    return;
  }
  console.log("MySQL Connected ✅");
});

module.exports = db;