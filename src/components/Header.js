import "./CSS/Header.css";
import githubcat from "./SVGS/githubcat.svg";
import star from "./SVGS/star.svg";

export default function Header({ onChange, onClick }) {
  return (
    <div className="Header">
      <div className="Header-row">
        <img className="Header-row_logo" src={githubcat} alt="github svg" />

        <div className="Header-row_middle-section">
          <h1 className="Header-row_headline">GIT HUB USERS</h1>

          <form className="Header-row_headline-form">
            <input
              className="Header-row_headline-form-input"
              type="text"
              placeholder="search users"
              onInput={onChange}
            />
          </form>
        </div>

        <img
          className="Header-row_logo"
          src={star}
          onClick={onClick}
          alt="star svg"
        />
      </div>
    </div>
  );
}
