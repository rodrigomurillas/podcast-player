import "./playbackbutton.css";

export default function Button() {
  return (
    <div className="button-container">
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          width: "50%",
          textAlign: "center",
          marginLeft: "0%",
        }}
      >
        Play Back
      </button>
    </div>
  );
}
