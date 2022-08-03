const { MongoClient } = require("mongodb");
const { MONGODB_ROOT, MONGODB_PORT, DB_NAME } = require("./constants");

let db = null;

const connectToDb = async () => {
  if (db === null) {
    const client = await MongoClient.connect(
      `mongodb://${MONGODB_ROOT}:${MONGODB_PORT}/${DB_NAME}`
    );
    db = client.db();
  }
  return db;
};

module.exports = { connectToDb };
