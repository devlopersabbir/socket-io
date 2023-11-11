import express from "express";
import config from "../config";
import http from "http";
import SocketServer from "./socket";

const app = express();
app.use(express.json());

// socket server
const server = http.createServer(app);
const PORT = config.PORT || 4000;
new SocketServer(server);
server.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
