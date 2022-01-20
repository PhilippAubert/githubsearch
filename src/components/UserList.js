import User from "./User";

export default function UserList({ data }) {
  function renderList() {
    const renderedList = data.map((data) => <User data={data} key={data.id} />);

    return renderedList;
  }

  return <div>{renderList()}</div>;
}
