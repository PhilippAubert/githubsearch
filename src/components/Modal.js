import React from "react";
import "./CSS/Modal.css";

export default function Modal({
  data,
  closeModal,
  handleBookmark,
  followers,
  repos,
}) {
  return (
    <div className="Modal">
      <div className="Modal-User-Frame">
        <img className="Modal-User_img" src={data.avatar_url} alt="user pic" />
        <div className="Modal-User_Information">
          <div className="Modal-User_Information-details">
            <p>Name: </p>
            <p>Followers: </p>
            <p>Repositories: </p>
          </div>
          <div className="Modal-User_Information-details">
            <p>{data.login}</p>
            <p>{followers.length}</p>
            <p>{repos.length}</p>
          </div>
        </div>
        <a className="Modal-User_href" href={data.html_url}>
          View Profile
        </a>
        <div className="Modal-User-Buttons">
          <button
            className="Modal-User-Buttons_button"
            onClick={handleBookmark}
          >
            bookmark user
          </button>
          <button className="Modal-User-Buttons_button" onClick={closeModal}>
            close window
          </button>
        </div>
      </div>
    </div>
  );
}
