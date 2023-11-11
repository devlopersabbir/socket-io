import React, { useState } from "react";
import { socket } from "./SocketProvider";

type TAppProps = {};

const App: React.FC<TAppProps> = ({}) => {
  const [mess, setMess] = useState<string>("");
  socket.on("connect", () => {
    console.log("connected!");
  });
  const submitHandler = (event: any) => {
    event.preventDefault();
    socket.emit("message", mess);
    setMess("");
  };
  socket.on("res", (res) => {
    console.log("res; ", res);
  });
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setMess(e.target.value)}
          type="text"
          value={mess}
          placeholder="Enter message"
        />
      </form>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default App;
