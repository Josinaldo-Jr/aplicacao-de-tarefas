import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/global.css";

import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);