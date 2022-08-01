const { getRoomModes } = require("../services/appData");

const router = require("express").Router();

router.route("/room-modes").get(async (req, res) => {
  try {
    const roomModes = await getRoomModes();
    return res.status(200).json({ roomModes });
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

module.exports = router;
