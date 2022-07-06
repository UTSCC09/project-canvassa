const usersDatabase = require("../databases/users");
const CanvassaException = require("../exceptions/CanvassaException");

const getUsers = async () => {
  const users = await usersDatabase.getUsers();
  return { users, count: users.length };
};

const getUser = async (id) => {
  if (!id) throw new CanvassaException(400, "invalid id");
  const user = await usersDatabase.getUser(id);
  if (!user)
    throw new CanvassaException(404, `user with id ${id} does not exist`);
  return user;
};

const getUserByEmail = async (email) => {
  if (!email) throw new CanvassaException(400, "invalid email");
  const user = await usersDatabase.getUserByEmail(email);
  if (!user)
    throw new CanvassaException(404, `user with email ${email} does not exist`);
  return user;
};

const createUser = async (email) => {
  if (!email) throw new CanvassaException(400, "invalid email");
  const user = await getUserByEmail(email);
  if (user)
    throw new CanvassaException(400, `user with email ${email} already exists`);
  return await usersDatabase.createUser(email);
};

const updateUser = async (updateData) => {
  if (!updateData) throw new CanvassaException(400, "invalid user data");
  const validKeys = ["email"];
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
  getUserByEmail,
};
