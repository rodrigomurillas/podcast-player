import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./body.tsx";
import Header from "./header.tsx";
import Button from "./playbackbutton.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Body />
    <p></p>
    <Button />
  </React.StrictMode>
);
