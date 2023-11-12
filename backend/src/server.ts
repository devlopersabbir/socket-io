import express from "express";
import { createServer } from "http";
import config from "../config";
import SocketServer from "./socket";

const app = express();
app.use(express.json());

const server = createServer(app);

new SocketServer(server);
const PORT = config.PORT;
server.listen(PORT, () => console.log(`PORT ${PORT}`));
