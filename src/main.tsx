import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./querry.css";
import { FriendsProvider } from "./contexts/FriendsContext.tsx";
import { BillProvider } from "./contexts/BillContext.tsx";
import { AddFriendProvider } from "./contexts/AddFriendContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FriendsProvider>
      <BillProvider>
        <AddFriendProvider>
          <App />
        </AddFriendProvider>
      </BillProvider>
    </FriendsProvider>
  </React.StrictMode>
);
