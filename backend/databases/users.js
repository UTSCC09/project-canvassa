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

const getUserByEmail = async (email) => {
  const user = await getDb().collection("users").findOne({ email });
  return user;
};

const createUser = async (email) => {
  const ts = new Timestamp();
  const user = await getDb()
    .collection("users")
    .insertOne({ email, createdAt: ts, updatedAt: ts });
  return user;
};

const updateUser = async (updateData) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByEmail,
};
