import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket server running on ws://localhost:8080");

/* wss.on("connection", (ws) => {
  console.log("New PC connected");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());
  });

  ws.on("close", () => {
    console.log("PC disconnected");
  });
}); */

wss.on("connection", (ws) => {
  const count = wss.clients.size;

  ws.send(JSON.stringify({
    type: "CLIENT_COUNT",
    count
  }));
});

