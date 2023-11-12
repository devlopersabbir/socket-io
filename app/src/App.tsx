import { useState } from "react";
import { socket } from "./SocketProvider";

const App = () => {
  const [mess, setMess] = useState<string>("");
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
          height: "100%",
          listStyle: "none",
          fontSize: "22px",
        }}
      >
        {[0, 1, 2].map((item: any, index: number) => (
          <li
            style={{ background: `${index % 2 !== 0 ? "gray" : "white"}` }}
            key={index}
          >
            {item ?? "fuck"}
          </li>
        ))}
      </ul>
      <form style={{ width: "100%", height: "20vh" }}>
        <textarea
          style={{ width: "100%", height: "100%" }}
          onChange={(e) => setMess(e.target.value)}
          value={mess}
          placeholder="Enter message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
