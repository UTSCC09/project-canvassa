import { io } from "socket.io-client";

export const get_room_connection = (uri) => {
  const module = {};

  module.socket = io("http://" + uri);

  module.socket.on("connect", () => {
    console.log("Connected");
  });

  return module;
};
