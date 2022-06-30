const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongodbPort = process.env.MONGODB_PORT;
const dbName = process.env.DB_NAME;

let connection = null;

const connectToDb = (cb = (err) => {}) => {
  MongoClient.connect(`mongodb://localhost:${mongodbPort}/${dbName}`)
    .then((client) => {
      console.log("MongoDB database connection established successfully");
      connection = client.db();
      return cb(null);
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => connection;

module.exports = {
  connectToDb,
  getDb,
};
