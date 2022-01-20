import React from "react";

export default function Header({ onInput }) {
  return (
    <div>
      <h1>GIT HUB USERS</h1>

      <form>
        <input type="text" onInput={onInput} />
      </form>
    </div>
  );
}
