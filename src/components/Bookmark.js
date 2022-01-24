import { useState, useEffect } from "react";
import BookmarkedUser from "./BookmarkedUser";

export default function Bookmark({ onClick }) {
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
    console.log(users);
  }, []);

  function handleDelete(user) {
    const userToDelete = usersFromLocal.find(
      (usersToDelete) => usersToDelete.login === user.login
    );
    console.log(`${userToDelete.login} was removed`);
    const copyOfUsers = usersFromLocal
      .slice()
      .filter((users) => users.id !== userToDelete.id);
    setUsersFromLocal(copyOfUsers);
    localStorage.setItem("bookmarks", JSON.stringify(copyOfUsers));
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
              onHandleDelete={() => handleDelete(data)}
            />
          ))
          .reverse()
      )}
    </div>
  );
}
