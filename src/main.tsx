import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.tsx";
import ListenAgain from "./listenagain.tsx";
import RecommendedAlbum from "./recommendedAlbum.tsx";
import SimilarTo from "./similarto.tsx";
import QuickPicks from "./quickpicks.tsx";
import Button from "./playbackbutton.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <ListenAgain />
    <SimilarTo />
    <RecommendedAlbum />
    <QuickPicks />
    <Button />
  </React.StrictMode>
);
