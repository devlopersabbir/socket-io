import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import config from "../config";

class SocketServer {
  private io: Server;
  socket: Socket | null;
  constructor(server: HttpServer) {
    this.io = new Server(server, {
      cors: {
        origin: config.NODE_ENV === "production" ? false : "*",
      },
    });
    console.log("Socket connected!");
    this.io.on("connection", this.serverListening);
  }
  serverListening = (socket: Socket) => {
    socket.on("chat-message", (data) => {
      console.log(data);
      this.io.emit("message", `${socket.id.substring(0, 5)} : ${data}`);
    });
  };
}
export default SocketServer;
