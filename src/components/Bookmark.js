import React from "react";
import { useState, useEffect } from "react";

export default function Bookmark() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("bookmarks"));
    setUser(users);
  }, []);

  function handleRemove(user) {
    const userToDelete = users.findIndex(
      (usersToDelete) => usersToDelete.id === user.id
    );
    console.log(userToDelete);
  }

  return (
    <div>
      <h1>BOOKMARKS </h1>
      {users.map(({ login, id, avatar_url }) => (
        <div>
          <p>
            {login}, {id}, {avatar_url}
          </p>
          <button onClick={handleRemove}>remove bookmark</button>
        </div>
      ))}
    </div>
  );
}
