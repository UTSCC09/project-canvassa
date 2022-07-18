require("dotenv").config({ path: __dirname + "/../.env" });

const PORT = process.env.PORT || 5000;

const AUTH_VARS = {
  SALT_ROUNDS: 10,
};

const FE_VARS = {
  ROOT: process.env.FE_ROOT,
};

const ENV_VARS = {
  PORT,
  DOMAIN: process.env.DOMAIN,
  MONGODB_PORT: process.env.MONGODB_PORT,
  MONGODB_ROOT: process.env.MONGODB_ROOT,
  DB_NAME: process.env.DB_NAME,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_BASE_URL: `${process.env.AUTH0_BASE_URL}:${PORT}`,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
};

const SOCKET_EVENTS = {
  CONNECT: "connection",
  DISCONNECT: "disconnect",
  JOIN_ROOM: "join-room",
  UPDATE_ROOM_MEMBERS: "update-room-members",
  ERROR: "cavassa-error",
};

module.exports = { ENV_VARS, AUTH_VARS, FE_VARS, SOCKET_EVENTS };
