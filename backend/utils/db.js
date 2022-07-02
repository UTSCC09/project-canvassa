const { MongoClient } = require("mongodb");
const { ENV_VARS } = require("./constants");

let connection = null;

const connectToDb = (cb = (err) => {}) => {
  MongoClient.connect(
    `mongodb://localhost:${ENV_VARS.MONGODB_PORT}/${ENV_VARS.DB_NAME}`
  )
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
