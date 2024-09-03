import "./sidebar.css";

type Props = {
  list: any[];
  setPage: Function;
};

export default function SideBar({ list, setPage }: Props) {
  function handleClick() {
    setPage("createPlaylist");
  }

  return (
    <div className="sidebar">
      <p></p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "50%",
          textAlign: "center",
          marginLeft: "25%",
        }}
      >
        Crear Playlist
      </button>
      {list.map((item) => {
        return (
          <div key={item.title}>
            <p>{item.image}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
