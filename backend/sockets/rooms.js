const { addRoomMember, getRoom } = require("../services/rooms");
const { getUserByUsername } = require("../services/users");
const { SOCKET_EVENTS } = require("../utils/constants");
const { getSocketRoomName, getSocketError } = require("./misc");

const onJoinRoom = async (io, socket, roomId) => {
  try {
    const socketRoomName = getSocketRoomName(roomId);
    socket.join(socketRoomName);
    const user = await getUserByUsername(socket.username);
    let room = await getRoom(roomId);
    if (room.members.every((id) => user._id.toString() !== id.toString())) {
      console.log("adding");
      room = await addRoomMember(roomId, user._id);
    }
    io.to(socketRoomName).emit(SOCKET_EVENTS.UPDATE_ROOM_MEMBERS, {
      members: room.members,
    });
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

module.exports = { onJoinRoom };
