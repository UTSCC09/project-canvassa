const { getDb } = require("../utils/db");

const getRoomModes = async () => {
  const cursor = await getDb().collection("room-modes").find({});
  return await cursor.toArray();
};

const getPublicRooms = async () => {
  const cursor = await getDb().collection("rooms").find({ type: "public" });
  return await cursor.toArray();
};

module.exports = {
  getRoomModes,
  getPublicRooms,
};
