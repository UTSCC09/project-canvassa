require("dotenv").config({ path: __dirname + "/../.env" });

const PORT = process.env.PORT || 5000;

const ENV_VARS = {
  PORT,
  MONGODB_PORT: process.env.MONGODB_PORT,
  DB_NAME: process.env.DB_NAME,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_BASE_URL: `${process.env.AUTH0_BASE_URL}:${PORT}`,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
};

module.exports = { ENV_VARS };
