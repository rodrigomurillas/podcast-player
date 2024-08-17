import { ArtistCard } from "./listenagain";
import "./quickpicks.css";

const Lista = [
  {
    song: "Son de Amores",
    artist: "Pinto Picasso",
    picture: <img className="img3" src="./public/pintopicasso1.jpg"></img>,
  },
  {
    song: "Dejala que vuelva",
    artist: "Piso 21",
    picture: <img className="img3" src="./public/piso21.jpg"></img>,
  },
  {
    song: "Santa",
    artist: "Roman",
    picture: <img className="img3" src="./public/santa.jpeg"></img>,
  },
];

export default function QuickPicks() {
  return (
    <>
      <h1>Quick Picks</h1>
      <ul>
        {Lista.map((list) => {
          return (
            <ArtistCard
              song={list.song}
              artist={list.artist}
              children={list.picture}
            ></ArtistCard>
          );
        })}
      </ul>
    </>
  );
}
