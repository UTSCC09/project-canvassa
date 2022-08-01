import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("lines", (lines) => {
    console.log(lines);
    socket.broadcast.emit("lines", lines);
  });
});

console.log("Starting Server");
httpServer.listen(3005);
