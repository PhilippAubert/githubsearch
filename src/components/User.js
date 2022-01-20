export default function User({ data, onClick }) {
  return (
    <div>
      <div className="User">
        <p>{data.login}</p>
        <img
          src={data.avatar_url}
          alt="user_pic"
          onClick={() => onClick(data)}
        />
      </div>
    </div>
  );
}
