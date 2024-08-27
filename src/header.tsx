import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/YT_Music.svg" />
        </div>
        <nav>
          <input type="text" placeholder="buscar"></input>
        </nav>
        <nav>
          <img src="./public/loggin.jpg" className="profile" />
        </nav>
      </header>
    </>
  );
}

export default Header;
