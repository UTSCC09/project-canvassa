const CanvassaException = require("../exceptions/CanvassaException");
const { removeRoomMember } = require("../services/rooms");
const { getUserByUsername } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");

const onDisconnect = async (io, socket) => {
  try {
    console.log("disconnected: " + socket.id);
    const user = await getUserByUsername(socket.username);
    await removeRoomMember(roomId, user._id);
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

const getSocketRoomName = (id) => `room ${id}`;

const getSocketError = (err) => ({
  code: err.status ?? 500,
  errors: err.messages ?? ["Internal server error"],
});

module.exports = { onDisconnect, getSocketRoomName, getSocketError };
