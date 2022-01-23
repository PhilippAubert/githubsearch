import React from "react";

export default function Header({ onChange, onClick }) {
  return (
    <div>
      <h1>GIT HUB USERS</h1>

      <form>
        <input type="text" placeholder="search users" onInput={onChange} />
      </form>
      <button onClick={onClick}>Show bookmarks</button>
    </div>
  );
}
