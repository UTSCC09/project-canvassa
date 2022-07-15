const CanvassaException = require("../exceptions/CanvassaException");
const { removeRoomMember } = require("../services/rooms");
const { removeSocketId, getUserBySocketId } = require("../services/users");

const onDisconnect = async (io, socket) => {
  try {
    console.log("disconnected: " + socket.id);
    const user = await getUserBySocketId(socket.id);
    let roomId = -1;
    user.connections.forEach((connection) => {
      if (connection.socketId === socket.id) roomId = connection.roomId;
    });
    if (roomId === -1)
      throw CanvassaException(409, `socket connection not found`);
    await removeSocketId(user._id, socket.id, roomId);
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
