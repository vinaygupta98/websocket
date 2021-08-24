const socket = new WebSocket(
  "ws://localhost:8080"
);

socket.onmessage = ({
  data,
}) => {
  console.log(
    "Message from Server ",
    data
  );
};

document.querySelector(
  "button"
).onclick = () => {
  socket.send("hello");
};
