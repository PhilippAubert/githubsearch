import React from "react";
import { useState } from "react";

export default function BookmarkedUser({
  data,
  onHandleDelete,
  followers,
  repos,
}) {
  const [showDetails, setShowDetails] = useState(false);

  function onShowDetails() {
    setShowDetails(true);
    if (showDetails) {
      setShowDetails(false);
    }
  }

  return (
    <div>
      {" "}
      <div>
        <p>{data.login}</p>
        <p>{data.url}</p>

        <img src={data.avatar_url} alt="user pic" />
        <button onClick={onHandleDelete}>remove bookmark</button>
        <button onClick={onShowDetails}>
          {showDetails ? "hide details" : "show details"}
        </button>
      </div>
      {showDetails ? (
        <div>
          <p>Followers: {followers.length}</p>
          <p>Public Repos: {repos.length}</p>
          <p>See all repos here:{data.repos_url}</p>
        </div>
      ) : (
        <p>click for details</p>
      )}
    </div>
  );
}
