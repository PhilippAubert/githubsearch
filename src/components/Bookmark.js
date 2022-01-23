import React from "react";
import { useState, useEffect } from "react";
import BookmarkedUser from "./BookmarkedUser";

export default function Bookmark() {
  const [usersFromLocal, setUsersFromLocal] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(true);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("bookmarks"));
    setUsersFromLocal(users);
    if (users.length === 0) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, []);

  function handleDelete(user) {
    const userToDelete = usersFromLocal.findIndex(
      (usersToDelete) => usersToDelete.login === user.login
    );
    const copyOfUsers = usersFromLocal.slice();
    copyOfUsers.splice(userToDelete, 1);
    setUsersFromLocal(copyOfUsers);
    localStorage.setItem("bookmarks", JSON.stringify(copyOfUsers));
  }
  return (
    <div>
      <h1>BOOKMARKS </h1>
      <h3>X</h3>
      {isBookmarked ? (
        <p>Nothing bookmarked yet</p>
      ) : (
        usersFromLocal.map(({ login, id, avatar_url }) => (
          <BookmarkedUser
            key={id}
            login={login}
            avatar_url={avatar_url}
            onHandleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}
