const bcrypt = require("bcrypt");

const CanvassaException = require("../exceptions/CanvassaException");
const { createUser, getUserByUsername } = require("./users");
const { AUTH_VARS } = require("../utils/constants");

const signup = async (username, password) => {
  if (!username || !password)
    throw new CanvassaException(400, "invalid username or password");
  let user = await getUserByUsername(username);
  if (user)
    throw new CanvassaException(
      409,
      `user with username ${username} already exists`
    );

  const hashedPassword = await bcrypt.hash(password, AUTH_VARS.SALT_ROUNDS);
  return await createUser(username, hashedPassword);
};

const signin = async (username, password) => {
  if (!username || !password)
    throw new CanvassaException(400, "invalid username or password");
  const user = await getUserByUsername(username);
  if (!user) throw new CanvassaException(401, "access denied");
  if (!(await bcrypt.compare(password, user.password)))
    throw new CanvassaException(401, "access denied");
  return user;
};

module.exports = { signup, signin };
