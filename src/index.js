import React from "react";
import ReactDOM from "react-dom/client";
import LazyLoad from "react-lazyload";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LazyLoad>
      <App />
    </LazyLoad>
  </React.StrictMode>
);
