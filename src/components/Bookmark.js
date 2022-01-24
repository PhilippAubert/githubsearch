import { useState, useEffect } from "react";
import BookmarkedUser from "./BookmarkedUser";

export default function Bookmark({ onClick, followers, repos }) {
  const [usersFromLocal, setUsersFromLocal] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(true);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(users);
    setUsersFromLocal(users);
    if (users.length === 0) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, []);

  function handleDelete(user) {
    const copyOfUsers = usersFromLocal.filter((users) => users.id !== user.id);
    setUsersFromLocal(copyOfUsers);
    localStorage.setItem("bookmarks", JSON.stringify(copyOfUsers));
    if (copyOfUsers.length === 0) {
      setIsBookmarked(true);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 490,
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>BOOKMARKS </h1>
      <h3 onClick={onClick}>Close</h3>
      {isBookmarked ? (
        <p>Nothing bookmarked yet</p>
      ) : (
        usersFromLocal
          .map((data) => (
            <BookmarkedUser
              key={data.id}
              data={data}
              followers={followers}
              repos={repos}
              onHandleDelete={() => handleDelete(data)}
            />
          ))
          .reverse()
      )}
    </div>
  );
}
