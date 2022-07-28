export const get_room_connection = () => {
  const module = {};

  module.socket = new WebSocket("ws://localhost:5001");

  module.socket.addEventListener("open", function open() {
    console.log("Connection Sucessful");
  });

  module.socket.addEventListener("message", function message(data) {
    console.log("Received v");
    console.log(data);
  });

  return module;
};
