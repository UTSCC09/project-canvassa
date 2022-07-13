const { ObjectId, Timestamp } = require("mongodb");
const { getDb } = require("../utils/db");

const getUsers = async () => {
  const cursor = await getDb().collection("users").find({});
  return await cursor.toArray();
};

const getUser = async (id) => {
  const user = await getDb()
    .collection("users")
    .findOne({ _id: ObjectId(id) });
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
    .insertOne({ username, password, createdAt: ts, updatedAt: ts });
  return user;
};

const updateUser = async (updateData) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByUsername,
};
