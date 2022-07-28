const { removeRoomMember, deleteRoom } = require("../services/rooms");
const { getUserByUsername } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");

const onDisconnect = async (io, socket) => {
  try {
    console.log("disconnected: " + socket.id);
    const user = await getUserByUsername(socket.username);
    let roomId = null;
    user.connections.forEach((connection) => {
      if (connection.socketId === socket.id)
        roomId = connection.roomId.toString();
    });
    const socketRoomName = getSocketRoomName(roomId);
    const room = await removeRoomMember(roomId, user._id.toString());
    io.to(socketRoomName).emit(SOCKET_EVENTS.UPDATE_ROOM_MEMBERS, {
      members: room.members,
    });
    if (room.members.length === 0) deleteRoom(roomId);
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
