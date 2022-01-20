import User from "./User";
import { useState } from "react";
import Modal from "./Modal";

export default function UserList({ data }) {
  const [isModal, setIsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleUser(data) {
    setSelectedUser(data);
    setIsModal(true);
    console.log(data);
  }

  function handleModal() {
    setIsModal(false);
  }

  function renderList() {
    let renderedList;
    if (Array.isArray(data)) {
      renderedList = data.map((data) => (
        <User data={data} key={data.id} onClick={handleUser} />
      ));
    } else {
      renderedList = <User data={data} key={data.id} onClick={handleUser} />;
    }
    return renderedList;
  }

  return (
    <div>
      {renderList()}
      {isModal && <Modal data={selectedUser} onClick={handleModal} />}
    </div>
  );
}
