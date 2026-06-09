const cron = require("node-cron");
const db = require("../config/db");

// runs daily at midnight
cron.schedule("* * * * * *", () => {
  const today = new Date();

  db.query("SELECT * FROM discount", (err, results) => {
    if (err) {
      console.error("Scheduler error fetching discounts:", err);
      return;
    }

    results.forEach((row) => {
      const activeDate = new Date(row.activeDate);
      const endDate = new Date(row.endDate + " 23:59:59");
      const newStatus = today >= activeDate && today <= endDate ? 1 : 0;

      db.query(
        "UPDATE discount SET status = ? WHERE disId = ?",
        [newStatus, row.disId],
        (updateErr) => {
          if (updateErr) {
            console.error(`Failed to update discount ${row.disId}:`, updateErr);
          }
        }
      );
    });

    console.log(`Checked ${results.length} discounts at ${new Date().toISOString()}`);
  });
});
