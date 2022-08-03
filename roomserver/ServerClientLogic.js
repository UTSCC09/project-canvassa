import canvas from "./Canvas.js";

const ServerClientLogic = {};
let io = null;

function setIo(_io) {
  io = _io;
}

function setupLogic() {
  if (!io) throw new Error("Socket is Null");

  //On Connection
  io.on("connection", (socket) => {
    console.log("Registered socker connection: ", socket.id);
    //Update User With Current Canvas
    setTimeout(() => {
      canvas.getCanvas().lines.forEach((l) => {
        socket.emit("lines", l);
      });
    }, 100);

    //Add Lines to Canvas Model, and Broadcast Changes
    socket.on("lines", (lines) => {
      canvas.addLines(lines);
      socket.broadcast.emit("lines", lines);
    });

    //Remove Lines from Canvas Model, and Broadcast Changes
    socket.on("removelines", (lines) => {
      canvas.addLines(lines);
      socket.broadcast.emit("removelines", lines);
    });
  });
}

export default { setIo, setupLogic };
