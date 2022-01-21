import React from "react";

export default function Modal({ data, closeModal, handleBookmark }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <p>{data.login}</p>
      <p>{data.url}</p>
      <p>{data.subscriptions_url}</p>
      <button onClick={handleBookmark}>bookmark user </button>
      <button onClick={closeModal}>close window</button>
    </div>
  );
}
