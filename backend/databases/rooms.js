const { ObjectId, Timestamp } = require("mongodb");
const { getDb } = require("../utils/db");

const createRoom = async (name, link, members, canvas) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection("rooms")
    .insertOne({ name, link, createdAt: ts, updatedAt: ts, members, canvas });
  return await getRoom(room.insertedId);
};

const getRoom = async (id) => {
  const room = await getDb()
    .collection("rooms")
    .findOne({ _id: new ObjectId(id) });
  return room;
};

const addRoomMember = async (id, memberId) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection("rooms")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $push: { members: memberId }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return room.value;
};

const removeRoomMember = async (id, memberId) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection("rooms")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { members: memberId }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return room.value;
};

const deleteRoom = async (id) => {
  const room = await getDb()
    .collection("rooms")
    .findOneAndDelete({ _id: new ObjectId(id) });
  return room.value;
};

module.exports = {
  createRoom,
  getRoom,
  addRoomMember,
  removeRoomMember,
  deleteRoom,
};
