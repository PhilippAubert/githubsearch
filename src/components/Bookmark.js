import { useState, useEffect } from "react";
import BookmarkedUser from "./BookmarkedUser";
import "./CSS/Bookmark.css";

export default function Bookmark({ onClick, followers, repos }) {
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
    console.log(users);
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
    <div className="Bookmark-List">
      <h1>BOOKMARKS </h1>

      <h3 onClick={onClick}>Close</h3>
      <div className="Bookmark-List">
        {isBookmarked ? (
          usersFromLocal
            .map((data) => (
              <BookmarkedUser
                key={data.id}
                data={data}
                onHandleDelete={() => handleDelete(data)}
              />
            ))
            .reverse()
        ) : (
          <p>Nothing bookmarked yet</p>
        )}
      </div>
    </div>
  );
}
