import { useState, useEffect } from "react";
import BookmarkedUser from "./BookmarkedUser";
import "./CSS/Bookmark.css";

export default function Bookmark({ onClick, followers, repos, data }) {
  const [usersFromLocal, setUsersFromLocal] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("bookmarks"));
    if (users === null || users.length === 0) {
      setIsBookmarked(false);
    } else {
      setIsBookmarked(true);
      setUsersFromLocal(users);
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
    <div>
      <h1>BOOKMARKS </h1>

      <h3 onClick={onClick}>Close</h3>
      {isBookmarked ? (
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
      ) : (
        <p>Nothing bookmarked yet</p>
      )}
    </div>
  );
}
