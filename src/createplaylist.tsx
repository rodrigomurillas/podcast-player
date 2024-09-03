import { useState } from "react";
import "./createplaylist.css";

type Props = {
  list: any[];
  setList: Function;
  setPage: Function;
};

export default function Playlist(props: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const newList = [...props.list];
    newList.push({ title, description, image });
    props.setList(newList);
    setTitle("");
    setDescription("");
    setImage("");
    props.setPage("");
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event?.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event?.target.value);
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          margin: "80px",
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "8px",
        }}
      >
        <label htmlFor="title">
          <p>Title:</p>
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="description">
          <p>Description:</p>
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="image">
          <p>Image:</p>
        </label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          value={image}
          onChange={handleImageChange}
        />
        <p></p>
        <button
          type="submit"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Agregar Playlist
        </button>
      </form>
    </div>
  );
}
