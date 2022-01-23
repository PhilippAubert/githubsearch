import User from "./User";
import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function UserList({ data }) {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [data]);

  function handleUser(data) {
    setSelectedUser(data);
    setIsModal(true);
  }

  function closeModal() {
    setIsModal(false);
  }

  function handleBookmark() {
    const usersFromLocal = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const existingUser = usersFromLocal.find(
      (user) => user.login === selectedUser.login
    );

    if (existingUser) {
      alert("User is already bookmarked");
    } else {
      usersFromLocal.push(selectedUser);
      console.log(`${selectedUser.login} is bookmarked`);
      localStorage.setItem("bookmarks", JSON.stringify(usersFromLocal));
    }
    setIsModal(false);
  }

  return (
    <div>
      {isEmpty ? (
        <p>no users found</p>
      ) : (
        data.map((data) => (
          <User data={data} key={data.id} onClick={handleUser} />
        ))
      )}
      {isModal && (
        <Modal
          data={selectedUser}
          closeModal={closeModal}
          handleBookmark={handleBookmark}
        />
      )}
    </div>
  );
}
