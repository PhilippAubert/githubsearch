import "./CSS/Header.css";

export default function Header({ onChange, onClick }) {
  return (
    <div className="Header">
      <h1 className="Headline">GIT HUB USERS</h1>

      <form className="Headline-Form">
        <input
          className="Headline-Form-Input"
          type="text"
          placeholder="search users"
          onInput={onChange}
        />
      </form>
      <button className="Headline-Button" onClick={onClick}>
        Show bookmarks
      </button>
    </div>
  );
}
