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
    console.log(data);
  }

  function handleModal() {
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
      {isModal && <Modal data={selectedUser} onClick={handleModal} />}
    </div>
  );
}
