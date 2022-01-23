import React from "react";

export default function BookmarkedUser({ login, avatar_url, onHandleDelete }) {
  return (
    <div>
      {" "}
      <div>
        <p>{login}</p>
        <img src={avatar_url} alt="user pic" />
        <button onClick={onHandleDelete}>remove bookmark</button>
        <button>show details</button>
      </div>
    </div>
  );
}
