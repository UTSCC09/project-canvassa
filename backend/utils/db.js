const { MongoClient } = require("mongodb");
const { ENV_VARS } = require("./constants");

const connectToDb = async () => {
  try {
    const client = await MongoClient.connect(
      `mongodb://localhost:${ENV_VARS.MONGODB_PORT}/${ENV_VARS.DB_NAME}`
    );
    console.log("MongoDB database connection established successfully");
    return client.db();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  connectToDb,
};
