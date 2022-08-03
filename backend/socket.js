const { Server } = require("socket.io");
const CanvassaException = require("./exceptions/CanvassaException");
const { onDisconnect, onJoinRoom, onLines } = require("./sockets");
const { SOCKET_EVENTS } = require("./utils/constants");

const setupSockets = (server) => {
  const io = new Server(server);

  io.use((socket, next) => {
    if (socket.handshake.auth.token) {
      socket.username = socket.handshake.auth.token;
      next();
    } else {
      next(new CanvassaException(401, "access denied"));
    }
  });

  io.on(SOCKET_EVENTS.CONNECT, (socket) => {
    console.log("made socket connection: " + socket.id);

    socket.on(
      SOCKET_EVENTS.DISCONNECT,
      async () => await onDisconnect(io, socket)
    );
    socket.on(
      SOCKET_EVENTS.JOIN_ROOM,
      async ({ roomId }) => await onJoinRoom(io, socket, roomId)
    );
    socket.on(
      SOCKET_EVENTS.LINES,
      async ({ roomId, lineObject }) =>
        await onLines(io, socket, roomId, lineObject)
    );
  });
};

module.exports = { setupSockets };
