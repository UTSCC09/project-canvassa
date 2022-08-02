const { Timestamp, ObjectId } = require("mongodb");
const { ROOM_TYPES, COLLECTIONS, BE_DOMAIN } = require("../constants");
const { connectToDb } = require("../utils");

const MIGRATION_NAME = "setup-public-rooms";

const ROOM_NAMES = ["Public Room 1", "Public Room 2", "Public Room 3"];

const migrationUp = async () => {
  try {
    console.log(`Starting Migration: ${MIGRATION_NAME}`);
    const db = await connectToDb();

    ROOM_NAMES.forEach(async (name) => {
      const ts = new Timestamp();
      const insertResult = await db.collection(COLLECTIONS.ROOMS).insertOne({
        name,
        link: "",
        createdAt: ts,
        updatedAt: ts,
        members: [],
        canvas: {},
        type: ROOM_TYPES.PUBLIC,
      });

      const room = await db
        .collection(COLLECTIONS.ROOMS)
        .findOne({ _id: new ObjectId(insertResult.insertedId) });

      const link = `${BE_DOMAIN}/backend/api/rooms/${room._id}/dynamic-join`;
      await db
        .collection(COLLECTIONS.ROOMS)
        .findOneAndUpdate(
          { _id: new ObjectId(room._id) },
          { $set: { updatedAt: new Timestamp(), link } },
          { returnDocument: "after" }
        );
    });

    console.log(`Completed Migration: ${MIGRATION_NAME}`);
  } catch (e) {
    console.log(`Failed Migration: ${MIGRATION_NAME}`);
    console.log(e);
  }
};

const migrationDown = async () => {
  const db = connectToDb();
  ROOM_NAMES.forEach(async (name) => {
    await db.collection(COLLECTIONS.ROOMS).findOneAndDelete({ name });
  });
};

module.exports = {
  migrationUp,
  migrationDown,
  name: `${MIGRATION_NAME}-migration1`,
};
