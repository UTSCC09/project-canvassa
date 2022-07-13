const usersDatabase = require("../databases/users");
const CanvassaException = require("../exceptions/CanvassaException");

const getUsers = async () => {
  const users = await usersDatabase.getUsers();
  return { users, count: users.length };
};

const getUser = async (id) => {
  if (!id) throw new CanvassaException(400, "invalid id");
  const user = await usersDatabase.getUser(id);
  return user;
};

const getUserByUsername = async (username) => {
  if (!username) throw new CanvassaException(400, "invalid username");
  const user = await usersDatabase.getUserByUsername(username);
  return user;
};

const createUser = async (username, password) => {
  if (!username || !password)
    throw new CanvassaException(400, "invalid username or password");
  const user = await getUserByUsername(username);
  if (user)
    throw new CanvassaException(
      400,
      `user with username ${username} already exists`
    );
  return await usersDatabase.createUser(username, password);
};

const updateUser = async (updateData) => {
  if (!updateData) throw new CanvassaException(400, "invalid user data");
  const validKeys = ["username", "password"];
  for (key in updateData) {
    if (!validKeys.includes(key) || !updateData[key])
      throw new CanvassaException(400, `invalid key ${key}`);
  }
  usersDatabase.updateUser(updateData);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByUsername,
};
