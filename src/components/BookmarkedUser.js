import React from "react";
import { useState } from "react";

export default function BookmarkedUser({ data, onHandleDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {" "}
      <div>
        <p>{data.login}</p>
        <p>{data.url}</p>

        <img src={data.avatar_url} alt="user pic" />
        <button onClick={onHandleDelete}>remove bookmark</button>
        <button>show details</button>
      </div>
      <div>
        <p>Followers: {data.followers_url.length}</p>
        <p>Public Repos: {data.repos_url.length}</p>
        <p></p>
        <p>Starred Repos: {data.starred_url.length}</p>
      </div>
    </div>
  );
}
