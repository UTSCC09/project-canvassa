const { ObjectId, Timestamp } = require("mongodb");
const { DB_COLLECTIONS } = require("../utils/constants");
const { getDb } = require("../utils/db");

const createRoom = async (name, members, canvas, type) => {
  const ts = new Timestamp();
  const room = await getDb().collection(DB_COLLECTIONS.ROOMS).insertOne({
    name,
    link: "",
    serverLink: "",
    createdAt: ts,
    updatedAt: ts,
    members,
    canvas,
    type,
  });
  return await getRoom(room.insertedId);
};

const getRoom = async (id) => {
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .findOne({ _id: new ObjectId(id) });
  return room;
};

const addRoomMember = async (id, memberId) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
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
    .collection(DB_COLLECTIONS.ROOMS)
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { members: memberId }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return room.value;
};

const deleteRoom = async (id) => {
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .findOneAndDelete({ _id: new ObjectId(id) });
  return room.value;
};

const updateRoomLink = async (id, link) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { updatedAt: ts, link } },
      { returnDocument: "after" }
    );
  return room.value;
};

const updateRoomServerLink = async (id, serverLink) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { updatedAt: ts, serverLink } },
      { returnDocument: "after" }
    );
  return room.value;
};

const updateRoomCanvas = async (id, canvas) => {
  const ts = new Timestamp();
  const room = await getDb()
    .collection(DB_COLLECTIONS.ROOMS)
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { updatedAt: ts, canvas } },
      { returnDocument: "after" }
    );
  return room.value;
};

module.exports = {
  createRoom,
  getRoom,
  addRoomMember,
  removeRoomMember,
  deleteRoom,
  updateRoomLink,
  updateRoomServerLink,
  updateRoomCanvas,
};
