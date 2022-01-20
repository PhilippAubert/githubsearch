import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("example");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`, {
      method: "GET",
      headers: {
        Authorization: "token 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",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("error", error));
  }, [userName]);

  function handleSearch(e) {
    e.preventDefault();
    const newUser = e.target.value;
    if (newUser.length > 2) {
      setUserName(newUser);
    }
  }

  return (
    <div className="App">
      <h1>GIT HUB USERS</h1>

      <form>
        <input type="text" onInput={handleSearch} />
      </form>

      <div className="User">
        <p>{data.url}</p>
        <img src={data.avatar_url} alt="user_pic" />
        <p>{data.bio}</p>
        <p>{data.name}</p>
      </div>
    </div>
  );
}

export default App;
