const socket = require("socket.io");
const { onDisconnect, onJoinRoom } = require("./sockets");
const { SOCKET_EVENTS } = require("./utils/constants");

const setupSockets = (server) => {
  const io = socket(server);

  io.on(SOCKET_EVENTS.CONNECT, (socket) => {
    console.log("made socket connection: " + socket.id);

    socket.on(
      SOCKET_EVENTS.DISCONNECT,
      async () => await onDisconnect(io, socket)
    );
    socket.on(
      SOCKET_EVENTS.JOIN_ROOM,
      async ({ roomId, userId }) => await onJoinRoom(io, socket, roomId, userId)
    );
  });
};

module.exports = { setupSockets };
