import { PropsWithChildren } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");

const SocketProvider = ({ children }: PropsWithChildren) => {
  return { children };
};

export default SocketProvider;
