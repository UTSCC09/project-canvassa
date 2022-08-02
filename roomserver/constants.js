import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.ENVIRONMENT; // 'dev' | 'prod'

const AUTH_VARS = {
  SALT_ROUNDS: 10,
};

const FE_VARS = {
  ROOT:
    ENVIRONMENT === "dev" ? process.env.FE_ROOT_DEV : process.env.FE_ROOT_PROD,
};

const ENV_VARS = {
  PORT,
  MONGODB_PORT: process.env.MONGODB_PORT,
  MONGODB_ROOT:
    ENVIRONMENT === "dev"
      ? process.env.MONGODB_ROOT_DEV
      : process.env.MONGODB_ROOT_PROD,
  DB_NAME: process.env.DB_NAME,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  FE_DOMAIN:
    ENVIRONMENT === "dev"
      ? process.env.FE_DOMAIN_DEV
      : process.env.FE_DOMAIN_PROD,
  BE_DOMAIN:
    ENVIRONMENT === "dev"
      ? process.env.BE_DOMAIN_DEV
      : process.env.BE_DOMAIN_PROD,
  ROOM_ID: process.env.ROOM_ID,
  SAVE_INTERVAL: process.env.SAVE_INTERVAL,
};

const SOCKET_EVENTS = {
  CONNECT: "connection",
  DISCONNECT: "disconnect",
  JOIN_ROOM: "join-room",
  UPDATE_ROOM_MEMBERS: "update-room-members",
  ERROR: "cavassa-error",
};

const ROOM_TYPES = {
  NORMAL: "normal",
  PUBLIC: "public",
};

export { ENV_VARS, AUTH_VARS, FE_VARS, SOCKET_EVENTS, ROOM_TYPES };
