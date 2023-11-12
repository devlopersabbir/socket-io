import express from "express";
import cors from "cors";
import { createServer } from "http";
import config from "./configs/config";
import SocketServer from "./socket";
import corsOptions from "./configs/corsOptions";

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const server = createServer(app);

new SocketServer(server);
const PORT = config.PORT;
server.listen(PORT, () => console.log(`PORT ${PORT}`));
