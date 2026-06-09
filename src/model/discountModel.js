const db = require("../config/db");

const getDiscount = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT disId, activeDate, endDate, status FROM discount";

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        const data2D = results.map((row) => Object.values(row));
        resolve(data2D);
      }
    });
  });
};

module.exports = { getDiscount };