const { getRoom, updateRoomCanvas } = require("../services/rooms");
const { SOCKET_EVENTS } = require("../utils/constants");
const { getSocketError, getSocketRoomName } = require("./misc");

const onLines = async (io, socket, roomId, lineObject) => {
  try {
    let room = await getRoom(roomId);
    room = await updateRoomCanvas(roomId, {
      ...room.canvas,
      lines: room.canvas.lines
        ? [...room.canvas.lines, lineObject]
        : [lineObject],
    });
    const socketRoomName = getSocketRoomName(roomId);
    io.to(socketRoomName).emit(SOCKET_EVENTS.LINES, room.canvas);
  } catch (err) {
    io.to(socket.id).emit(SOCKET_EVENTS.ERROR, getSocketError(err));
  }
};

module.exports = { onLines };
