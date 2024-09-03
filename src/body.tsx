import ListenAgain from "./listenagain.tsx";
import RecommendedAlbum from "./recommendedAlbum.tsx";
import SimilarTo from "./similarto.tsx";
import QuickPicks from "./quickpicks.tsx";
import Button from "./playbackbutton.tsx";
import NewPlaylist from "./createplaylist.tsx";
import SideBar from "./sidebar.tsx";
import { useState } from "react";

export default function Body() {
  const [list, setList] = useState<Array<any>>([]);
  const [page, setPage] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "20%" }}>
        <SideBar list={list} setPage={setPage} />
      </div>
      <div style={{ width: "80%" }}>
        {page === "createPlaylist" ? (
          <NewPlaylist list={list} setList={setList} setPage={setPage} />
        ) : (
          <>
            <ListenAgain />
            <SimilarTo />
            <RecommendedAlbum />
            <QuickPicks />
          </>
        )}
      </div>
    </div>
  );
}
