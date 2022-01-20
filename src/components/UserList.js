import User from "./User";

export default function UserList({ data, key }) {
  function renderList() {
    const renderedList = data.map((user) => (
      <User
        url={user.url}
        avatar={user.avatar_url}
        bio={user.login}
        name={user.name}
        key={user.id}
      />
    ));
    return renderedList;
  }

  return <div>{renderList()}</div>;
}
