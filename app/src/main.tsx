import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SocketProvider from "./SocketProvider.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>
);
