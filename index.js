const express = require('express');
let cors = require('cors');
let sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());

// let db;

// (async () => {
//   db = await open({ ''})
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
