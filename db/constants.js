require("dotenv").config();

const ENVIRONMENT = process.env.ENVIRONMENT; // 'dev' | 'prod'

const MONGODB_ROOT =
  ENVIRONMENT === "dev"
    ? process.env.MONGODB_ROOT_DEV
    : process.env.MONGODB_ROOT_PROD;
const MONGODB_PORT = process.env.MONGODB_PORT;
const DB_NAME = process.env.DB_NAME;
const BE_DOMAIN =
  ENVIRONMENT === "dev"
    ? process.env.BE_DOMAIN_DEV
    : process.env.BE_DOMAIN_PROD;

const COLLECTIONS = {
  ROOMS: "rooms",
};

const ROOM_NAMES = ["Public Room 1", "Public Room 2", "Public Room 3"];

const ROOM_TYPES = {
  NORMAL: "normal",
  PUBLIC: "public",
};

module.exports = {
  MONGODB_ROOT,
  MONGODB_PORT,
  DB_NAME,
  COLLECTIONS,
  ROOM_NAMES,
  ROOM_TYPES,
  BE_DOMAIN,
};
