const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  getUserByEmail,
} = require("../services/users");

router.route("/").get(async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status).json({ errors: err.messages });
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    res.status(200).json({ done: true, id: true });
  } catch (err) {
    res.status(err.status).json({ errors: err.messages });
  }
});

module.exports = { router };
