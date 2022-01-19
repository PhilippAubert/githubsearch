import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("example");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`, {
      method: "GET",
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("error", error));
  }, [userName]);

  function handleSearch(e) {
    e.preventDefault();
    const newUser = e.target.value;
    if (newUser.length <= 2) {
      setUserName("");
    } else {
      setUserName(newUser);
    }
  }

  return (
    <div className="App">
      <h1>GIT HUB USERS</h1>
      <form>
        <input type="text" onInput={handleSearch} />
      </form>
      <div>
        <p>{data.url}</p>
        <img src={data.avatar_url} alt="user_pic" />
        <p>{data.bio}</p>
      </div>
    </div>
  );
}

export default App;
