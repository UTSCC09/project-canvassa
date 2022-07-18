const router = require("express").Router();
const CanvassaException = require("../exceptions/CanvassaException");
const {
  getRoom,
  createRoom,
  addRoomMember,
  removeRoomMember,
  deleteRoom,
} = require("../services/rooms");
const { FE_VARS } = require("../utils/constants");

router.route("/").post(async (req, res) => {
  try {
    const { name } = req.body;
    const room = await createRoom(name, req.session.username);
    res.status(200).json(room);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const room = await getRoom(id);
    if (!room)
      throw new CanvassaException(404, `rooom with id ${id} does not exist`);
    res.status(200).json(room);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/:id/add-member").patch(async (req, res) => {
  try {
    const { id } = req.params;
    const { memberId } = req.body;
    const room = await addRoomMember(id, memberId);
    res.status(200).json(room);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/:id/remove-member").patch(async (req, res) => {
  try {
    const { id } = req.params;
    const { memberId } = req.body;
    const room = await removeRoomMember(id, memberId);
    res.status(200).json(room);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const room = await deleteRoom(id);
    res.status(200).json(room);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

router.route("/:id/dynamic-join").get(async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const room = await getRoom(id);
    console.log(room);
    if (!room)
      throw new CanvassaException(404, `rooom with id ${id} does not exist`);
    console.log(`${FE_VARS.ROOT}/rooms/${id}`);
    return res.redirect(301, `${FE_VARS.ROOT}/rooms/${id}`);
  } catch (err) {
    res
      .status(err.status ?? 500)
      .json({ errors: err.messages ?? ["Internal server error"] });
  }
});

module.exports = router;
