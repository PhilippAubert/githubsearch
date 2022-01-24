import React from "react";
import { useState } from "react";

export default function BookmarkedUser({ data, onHandleDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  function onShowDetails() {
    setShowDetails(true);
    if (showDetails) {
      setShowDetails(false);
    }
  }

  fetch(`https://api.github.com/users/${data.login}/followers`)
    .then((res) => res.json())
    .then((followers) =>
      followers.forEach((follower) => console.log("FOLLOWERS", follower.login))
    );

  fetch(`https://api.github.com/users/${data.login}/repos`)
    .then((res) => res.json())
    .then((repos) =>
      repos.forEach((repo) => console.log("REPOSITORIES", repo.name))
    );

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
          <p>Followers: {data.followers_url}</p>
          <p>Public Repos: {data.repos_url.length}</p>
          <p></p>
          <p>Starred Repos: {data.starred_url.length}</p>
        </div>
      ) : (
        <p>click for details</p>
      )}
    </div>
  );
}
