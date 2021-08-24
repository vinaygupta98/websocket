const WebSocket = require("ws");
const server =
  new WebSocket.Server({
    port: 8080,
  });

server.on(
  "connection",
  (socket) => {
    console.log(socket);
    socket.on(
      "message",
      (message) => {
        console.log(message);
        socket.send(
          `roger that ${message}`
        );
      }
    );
  }
);
