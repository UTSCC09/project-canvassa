const { ObjectId, Timestamp } = require("mongodb");
const { getDb } = require("../utils/db");

const getUsers = async () => {
  const cursor = await getDb().collection("users").find({});
  return await cursor.toArray();
};

const getUser = async (id) => {
  const user = await getDb()
    .collection("users")
    .findOne({ _id: new ObjectId(id) });
  return user;
};

const getUserByUsername = async (username) => {
  const user = await getDb().collection("users").findOne({ username });
  return user;
};

const createUser = async (username, password) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .insertOne({ username, password, createdAt: ts, updatedAt: ts, rooms: [] });
  return await getUser(user.insertedId);
};

const addRoom = async (id, roomId) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $push: { rooms: roomId }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return user;
};

const removeRoom = async (id, roomId) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { rooms: roomId }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return user;
};

const updateUser = async (updateData) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByUsername,
  addRoom,
  removeRoom,
};
