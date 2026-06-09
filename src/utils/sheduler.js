const cron = require("node-cron");

// runs every minute
cron.schedule("* * * * * *", () => {
  console.log("Running task every seccond" + new Date);
  
});