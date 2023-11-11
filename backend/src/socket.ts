import { Server as HttpServer } from "http";
import { Socket, Server } from "socket.io";

class SocketServer {
  public static instance: SocketServer;
  public io: Server;
  socket: Socket | null;
  constructor(server: HttpServer) {
    SocketServer.instance = this;

    this.io = new Server(server);
    this.socket = null;
    console.log("Socket started...");
    this.io.on("connection", this.StartListening);
  }

  StartListening = (socket: Socket) => {
    this.socket = socket;
    console.log("A user connected: ", socket);
    socket.join(socket.data);
  };
}

export default SocketServer;
