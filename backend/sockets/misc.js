const { removeRoomMember, deleteRoom } = require("../services/rooms");
const { getUserByUsername } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");
const { leaveRoom } = require("./rooms");

const onDisconnect = async (io, socket) => {
  try {
    console.log("disconnected: " + socket.id);
    const roomId = await getUserRoomId(socket);
    await leaveRoom(io, socket, roomId);
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

const getSocketRoomName = (id) => `room ${id}`;

const getSocketError = (err) => ({
  code: err.status ?? 500,
  errors: err.messages ?? ["Internal server error"],
});

const getUserRoomId = async (socket) => {
  const user = await getUserByUsername(socket.username);
  let roomId = null;
  user.connections.forEach((connection) => {
    if (connection.socketId === socket.id)
      roomId = connection.roomId.toString();
  });
  return roomId;
};

module.exports = {
  onDisconnect,
  getSocketRoomName,
  getSocketError,
  getUserRoomId,
};
