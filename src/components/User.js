import "./CSS/User.css";

export default function User({ data, onClick }) {
  return (
    <div>
      <div className="User">
        <div className="User-frame">
          <img
            className="User-image"
            src={data.avatar_url}
            alt="user_pic"
            onClick={() => onClick(data)}
          />
          <div className="User-Info">
            <p className="User-name">User-Name: {data.login}</p>
            <a className="User-name" href={data.html_url}>
              URL: {data.url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
