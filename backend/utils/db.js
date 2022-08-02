const { MongoClient } = require("mongodb");
const { ENV_VARS } = require("./constants");

let db = null;

const connectToDb = async () => {
  try {
    const client = await MongoClient.connect(
      `mongodb://${ENV_VARS.MONGODB_ROOT}:${ENV_VARS.MONGODB_PORT}/${ENV_VARS.DB_NAME}`,
    );
    console.log("MongoDB database connection established successfully");
    db = client.db();
    return db;
  } catch (e) {
    console.log(e);
  }
};

const getDb = () => db;

module.exports = {
  connectToDb,
  getDb,
};
