const { MongoClient, Timestamp, ObjectId } = require("mongodb");
const {
  MONGODB_ROOT,
  MONGODB_PORT,
  DB_NAME,
  ROOM_NAMES,
  ROOM_TYPES,
  COLLECTIONS,
  BE_DOMAIN,
} = require("./constants");

const MIGRATION_NAME = "setup-room-modes";

const ROOM_MODES = [
  {
    title: "Normal",
    desc: "Have fun drawing with your friends.",
    disabled: false,
  },
  {
    title: "Round Robin",
    desc: "Get a prompt and take turns drawing it!",
    disabled: true,
  },
  {
    title: "Presenting",
    desc: "Have a large audience and few presenters that control the canvas",
    disabled: true,
  },
];

const migration = async () => {
  try {
    console.log(`Starting Migration: ${MIGRATION_NAME}`);

    const client = await MongoClient.connect(
      `mongodb://${MONGODB_ROOT}:${MONGODB_PORT}/${DB_NAME}`
    );
    const db = client.db();

    ROOM_MODES.forEach(async (roomMode) => {
      const ts = new Timestamp();
      await db.collection(COLLECTIONS.ROOM_MODES).insertOne({
        ...roomMode,
        createdAt: ts,
        updatedAt: ts,
      });
    });

    console.log(`Completed Migration: ${MIGRATION_NAME}`);
  } catch (e) {
    console.log(`Failed Migration: ${MIGRATION_NAME}`);
    console.log(e);
  }
};

module.exports = migration;
