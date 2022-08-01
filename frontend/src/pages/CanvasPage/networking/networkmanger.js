import { io } from "socket.io-client";

export const get_room_connection = () => {
  const module = {};

  module.socket = io("http://localhost:5000");

  module.socket.on("connect", () => {
    console.log("Connected");
  });

  return module;
};
