import { createServer } from "http";
import { Server } from "socket.io";
import { connectToDb } from "./database.js";
import serverlogic from "./ServerClientLogic.js";
import canvas from "./Canvas.js";
import room from "./Room.js";

const startServer = async (port = 3005) => {
  //Setup Database
  await connectToDb();

  //Setup Http Server
  const httpServer = createServer();

  //Setup Models
  await room.load();

  console.log(canvas.getCanvas());
  console.log(room.getRoom());

  //Setup Socket
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  //Setup Server Client Logic
  serverlogic.setIo(io);
  serverlogic.setupLogic();

  //Run Http Server
  console.log("Starting Server");
  httpServer.listen(port);
};

startServer();
