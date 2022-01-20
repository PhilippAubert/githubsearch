import React from "react";

export default function User({ data }) {
  return (
    <div>
      <div className="User">
        <p>{data.login}</p>
        <img src={data.avatar_url} alt="user_pic" />
        <p>{data.url}</p>
        <p>{data.name}</p>
      </div>
    </div>
  );
}
