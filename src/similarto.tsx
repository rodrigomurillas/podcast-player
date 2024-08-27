import { ArtistCard } from "./listenagain";
import "./similarto.css";

function SimilarTo() {
  return (
    <>
      <h1>Similar To</h1>
      <ul>
        <ArtistCard song="Besos Mojados" artist="Mayinbito">
          <img
            className="img1"
            src="./public/mayimbito.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
        <ArtistCard song="Luna" artist="Román X Dj Khalid">
          <img
            className="img1"
            src="./public/djkhalidluna.jpg"
            width={150}
            height={140}
          ></img>
        </ArtistCard>
        <ArtistCard song="Dicelo" artist="Román, Kira Brown">
          <img
            className="img1"
            src="./public/romanftkira.jpg"
            width={140}
            height={140}
          ></img>
        </ArtistCard>
      </ul>
    </>
  );
}

export default SimilarTo;
