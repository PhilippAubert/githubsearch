import React from "react";

export default function BookmarkedUser({ login, avatar_url, onClick }) {
  return (
    <div>
      {" "}
      <div>
        <p>
          {login}, {avatar_url}
        </p>
        <button onClick={onClick}>remove bookmark</button>
        <button>show details</button>
      </div>
    </div>
  );
}
