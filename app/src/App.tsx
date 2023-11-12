import React, { useEffect, useState } from "react";
import { socket } from "./SocketProvider";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [mess, setMess] = useState<any[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (value.length < 1) return;
    socket.emit("chat-message", value);
    setValue("");
  };
  useEffect(() => {
    return () => {
      socket.on("message", (data: string) => {
        if (data) {
          setMess((prev) => [...prev, data]);
        }
      });
    };
  }, []);
  console.log(mess);
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          height: "80vh",
          overflowY: "scroll",
          scrollBehavior: "smooth",
          listStyle: "none",
          fontSize: "22px",
        }}
      >
        {mess &&
          mess.map((item: any, index: number) => (
            <li
              style={{ background: `${index % 2 !== 0 ? "gray" : "white"}` }}
              key={index}
            >
              {item ?? "fuck"}
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "10vh" }}>
        <input
          type="text"
          style={{ width: "100%", fontSize: "30px", height: "100%" }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter message"
        />
      </form>
    </div>
  );
};

export default App;
