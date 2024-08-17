import { ReactNode } from "react";
import "./listenagain.css";

type Props = {
  children: ReactNode;
  song: String;
  artist: String;
};

export function ArtistCard(props: Props) {
  const { children, song, artist } = props;
  return (
    <li>
      <h2>{children}</h2>
      <p>cancion: {song}</p>
      <p>artista: {artist}</p>
    </li>
  );
}

function ListenAgain() {
  return (
    <>
      <h1>Listen Again</h1>
      <ul>
        <ArtistCard song="Paris" artist="Pinto Picasso">
          <img
            className="img"
            src="./public/pintopicasso2.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
        <ArtistCard song="Como va a ser" artist="Pinto Picasso">
          <img
            className="img"
            src="./public/pintopicasso1.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
        <ArtistCard song="Know You NM" artist="Pinto Picasso">
          <img
            className="img"
            src="./public/pintopicasso1.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
        <ArtistCard song="Ilusiones" artist="Mr. Don">
          <img
            className="img"
            src="./public/mrdonilusiones.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
      </ul>
    </>
  );
}

export default ListenAgain;
