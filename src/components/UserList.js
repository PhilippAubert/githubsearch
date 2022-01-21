import User from "./User";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import useLocalStorage from "./utils/useLocalStorage";

export default function UserList({ data }) {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [user, setUser] = useLocalStorage("bookmarks", []);

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
    setUser([...user, selectedUser]);
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
      {/*      {user.map(({ login, id, avatar_url }) => (
        <p>
          {login}, {id}, {avatar_url}
        </p>
      ))} */}
    </div>
  );
}
