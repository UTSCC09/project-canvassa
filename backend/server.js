const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let server = null;
let db = null;

connectToDb((err) => {
  if (err) return;
  server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
  db = getDb();
});
