import { Server as HttpServer } from "http";
import { Socket, Server } from "socket.io";

class SocketServer {
  public static instance: SocketServer;
  public io: Server;
  socket: Socket | null;

  constructor(server: HttpServer) {
    SocketServer.instance = this;
    this.io = new Server(server, {
      cors: {
        origin: "*",
        credentials: true,
      },
    });
    this.socket = null;
    console.log("Socket started...");
    this.io.on("connection", this.StartListening);
  }

  StartListening = (socket: Socket) => {
    this.socket = socket;
    console.log(`${socket.id ?? "UN"} is connected!`);
    socket.join(socket.id);

    // send message
    socket.on("message", (data) => {});

    socket.on("disconnect", () => {
      console.log(`${socket.id ?? "UN"} is disconnected!`);
    });
  };
}

export default SocketServer;
