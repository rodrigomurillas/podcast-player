import { ReactNode } from "react";
import "./listenagain.css";

type Props = {
  children: ReactNode;
  album: String;
  artist: String;
  songs: String;
};

function AlbumCard(props: Props) {
  const { children, album, artist, songs } = props;
  return (
    <li>
      <h2>{children}</h2>
      <p>album: {album}</p>
      <p>artista: {artist}</p>
      <p>canciones: {songs}</p>
    </li>
  );
}

function RecommendedAlbum() {
  return (
    <>
      <h1>Recommended Albums</h1>
      <ul>
        <AlbumCard album="Bypass" artist="Mr. Don" songs="7 canciones">
          <img
            className="img"
            src="./public/mrdonbypass.jpg"
            width={140}
            height={140}
          ></img>
        </AlbumCard>
        <AlbumCard album="Bleu" artist="Pinto Picasso" songs="5 canciones">
          <img
            className="img"
            src="./public/bleu.jpeg"
            width={140}
            height={140}
          ></img>
        </AlbumCard>
        <AlbumCard album="Historia" artist="Pinto Picasso" songs="6 canciones">
          <img
            className="img"
            src="./public/historia.jpg"
            width={140}
            height={140}
          ></img>
        </AlbumCard>
      </ul>
    </>
  );
}

export default RecommendedAlbum;
