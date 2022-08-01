const { getDb } = require("../utils/db");

const getRoomModes = async () => {
  const cursor = await getDb().collection("room-modes").find({});
  return await cursor.toArray();
};

module.exports = {
  getRoomModes,
};
