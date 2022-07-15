const { addRoomMember } = require("../services/rooms");
const { addSocketId } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");
const { getSocketRoomName, getSocketError } = require("./misc");

const onJoinRoom = async (io, socket, roomId, userId) => {
  try {
    const socketRoomName = getSocketRoomName(roomId);
    socket.join(socketRoomName);

    await addSocketId(userId, socket.id, roomId);
    const room = await addRoomMember(roomId, userId);
    io.to(socketRoomName).emit(SOCKET_EVENTS.UPDATE_ROOM_MEMBERS, {
      members: room.members,
    });
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

module.exports = { onJoinRoom };
