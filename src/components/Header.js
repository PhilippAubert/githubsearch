import React from "react";

export default function Header({ onChange }) {
  return (
    <div>
      <h1>GIT HUB USERS</h1>

      <form>
        <input type="text" placeholder="search users" onInput={onChange} />
      </form>
    </div>
  );
}
