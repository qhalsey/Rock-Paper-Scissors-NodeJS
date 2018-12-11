const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const clientPath = __dirname + "/../client";

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

server.on('error', () => {
  console.log(`Server Error ${error}`);
});

server.listen(8080, () => {
  console.log("RPS started on 8080");
});
