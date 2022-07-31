const router = require("express").Router();
const { getUsers, getUser } = require("../services/users");

router.route("/").get(async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).json(data);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

// router.route("/:id").get(async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await getUser(id);
//     res.status(200).json(data);
//     res.status(200).json(user);
//   } catch (err) {
//     res
//       .status(err.status ?? 500)
//       .json({ errors: err.messages ?? ["Internal server error"] });
//   }
// });

module.exports = router;
