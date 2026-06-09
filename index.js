const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require("./sheduler");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
