const { getDb } = require("../utils/db");
const { DB_COLLECTIONS } = require("../utils/constants");

const getRoomModes = async () => {
  const cursor = await getDb().collection(DB_COLLECTIONS.ROOM_MODES).find({});
  return await cursor.toArray();
};

const getPublicRooms = async () => {
  const cursor = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .find({ type: "public" });
  return await cursor.toArray();
};

module.exports = {
  getRoomModes,
  getPublicRooms,
};
