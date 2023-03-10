import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "remixicon/fonts/remixicon.css";
import "./index.css";
import App from "./App";
import Carrousel from "./Carrousel";

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(
  <React.StrictMode>
    <Carrousel />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
