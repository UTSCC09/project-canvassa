const usersDatabase = require("../databases/users");

const getUsers = async () => {
  const users = await usersDatabase.getUsers();
  return { users, count: users.length };
};

const getUser = async (id) => {
  return await usersDatabase.getUser(id);
};

const getUserByEmail = async (email) => {
  return await usersDatabase.getUserByEmail(email);
};

const createUser = async (email) => {
  return await usersDatabase.createUser(email);
};

const updateUser = async (updateData) => {
  usersDatabase.updateUser(updateData);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByEmail,
};
