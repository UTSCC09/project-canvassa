import { MongoClient } from "mongodb";
import { ENV_VARS } from "./constants.js";

let db = null;

export const connectToDb = async () => {
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

export const getDb = () => db;
