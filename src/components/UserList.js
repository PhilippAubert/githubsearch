import User from "./User";

export default function UserList({ data }) {
  console.log(typeof data);
  function renderList() {
    let renderedList;
    if (Array.isArray(data)) {
      renderedList = data.map((data) => <User data={data} key={data.id} />);
    } else {
      renderedList = <User data={data} key={data.id} />;
    }

    return renderedList;
  }

  return <div>{renderList()}</div>;
}
