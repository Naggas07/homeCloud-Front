import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth.context";

require("dotenv").config();

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
