import React from "react";
import ReactDOM from "react-dom/client";
import UserContext from "../context/UserContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
