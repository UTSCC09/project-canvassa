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
  const user = await getDb().collection("users").insertOne({
    username,
    password,
    createdAt: ts,
    updatedAt: ts,
    rooms: [],
    connections: [],
  });
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
  return user.value;
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
  return user.value;
};

const addSocketId = async (id, socketId, roomId) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $push: { connections: { socketId, roomId } }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return user.value;
};

const removeSocketId = async (id, socketId, roomId) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { connections: { socketId, roomId } }, $set: { updatedAt: ts } },
      { returnDocument: "after" }
    );
  return user.value;
};

const getUserBySocketId = async (socketId) => {
  const user = await getDb()
    .collection("users")
    .findOne({ connections: { $elemMatch: { socketId } } });
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
  addSocketId,
  removeSocketId,
  getUserBySocketId,
};
