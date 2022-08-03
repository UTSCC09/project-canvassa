const {
  addRoomMember,
  getRoom,
  removeRoomMember,
  deleteRoom,
} = require("../services/rooms");
const { getUserByUsername, addSocketId } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");
const { getSocketRoomName, getSocketError } = require("./misc");

const onJoinRoom = async (io, socket, roomId) => {
  try {
    const socketRoomName = getSocketRoomName(roomId);
    socket.join(socketRoomName);
    const user = await getUserByUsername(socket.username);
    let room = await getRoom(roomId);
    if (room.members.every((id) => user._id.toString() !== id.toString())) {
      room = await addRoomMember(roomId, user._id.toString());
      await addSocketId(user._id.toString(), socket.id, room._id.toString());
    }
    io.to(socketRoomName).emit(SOCKET_EVENTS.UPDATE_ROOM_MEMBERS, {
      members: room.members,
    });
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

const leaveRoom = async (io, socket, roomId) => {
  try {
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

module.exports = { onJoinRoom, leaveRoom };
