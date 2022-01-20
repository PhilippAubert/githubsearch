import React from "react";

export default function Modal({ data, onClick }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
      onClick={onClick}
    >
      <p>{data.login}</p>
      <p>{data.url}</p>
      <p>{data.subscriptions_url}</p>
    </div>
  );
}
