export default function BookmarkedUser({ data, onHandleDelete }) {
  return (
    <div>
      <div className="User">
        <div className="User-frame">
          <img className="User-image" src={data.avatar_url} alt="user_pic" />
          <div className="User-frame_info">
            <p>{data.login}</p>
            <a href={data.html_url}>profile</a>
            <button className="User-button" onClick={onHandleDelete}>
              REMOVE BOOKMARK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
