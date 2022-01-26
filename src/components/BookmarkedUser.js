export default function BookmarkedUser({
  data,
  onHandleDelete,
  followers,
  repos,
}) {
  console.log(repos);
  console.log(followers);
  return (
    <div>
      <div className="User">
        <div className="User-frame">
          <img className="User-image" src={data.avatar_url} alt="user_pic" />
          <div>
            <p>{data.login}</p>
            <p>followers: {followers.length}</p>
            <p>repos: {repos.length}</p>
            <a href={data.html_url}>profile</a>
          </div>
        </div>
      </div>
      <button onClick={onHandleDelete}>REMOVE BOOKMARK</button>
    </div>
  );
}
