import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3002",
  },
});

io.on("connection", (socket) => {
  socket.on("lines", (lines) => {
    console.log(lines);
    socket.broadcast.emit("lines", lines);
  });
});

httpServer.listen(5000);
