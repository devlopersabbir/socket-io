import React, { useEffect } from "react";
import { io } from "socket.io-client";
export const socket = io("http://localhost:5000");

type TSocketProvider = {
  children: React.ReactNode;
};
const SocketProvider = ({ children }: TSocketProvider) => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected!");
    });
  }, []);

  return <main>{children}</main>;
};

export default SocketProvider;
