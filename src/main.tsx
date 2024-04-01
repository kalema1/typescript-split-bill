import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./querry.css";
import { FriendsProvider } from "./contexts/FriendsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FriendsProvider>
      <App />
    </FriendsProvider>
  </React.StrictMode>
);
