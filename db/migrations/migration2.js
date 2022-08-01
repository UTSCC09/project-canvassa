const { Timestamp, ObjectId } = require("mongodb");
const { COLLECTIONS } = require("../constants");
const { connectToDb } = require("../utils");

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

const migrationUp = async () => {
  try {
    console.log(`Starting Migration: ${MIGRATION_NAME}`);

    const db = await connectToDb();

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

const migrationDown = async () => {
  const db = connectToDb();
  ROOM_MODES.forEach(async (roomMode) => {
    await db
      .collection(COLLECTIONS.ROOM_MODES)
      .findOneAndDelete({ title: roomMode.title });
  });
};

module.exports = {
  migrationUp,
  migrationDown,
  name: `${MIGRATION_NAME}-migration2`,
};
