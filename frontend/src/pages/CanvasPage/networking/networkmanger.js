import { io } from "socket.io-client";

export const get_room_connection = (serverLink) => {
  const module = {};

  module.socket = io(serverLink, {
    transports: ["websocket"],
  });
  console.log(module.socket);

  module.socket.on("connect", () => {
    console.log("Connected");
  });

  return module;
};
