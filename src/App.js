import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";

import UserList from "./components/UserList.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const baseUrl = "https://api.github.com/users?per_page=100&page1/";
    let url;
    if (!userName) {
      url = baseUrl;
    }
    if (userName) {
      url = `https://api.github.com/users/${userName}`;
    }

    fetch(url, {
      method: "GET",
      accept: "application/vnd.github.v3+json",
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
      setUserName([newUser]);
    } else if (newUser.length === 0) {
      setUserName("");
    }
  }

  return (
    <div className="App">
      <Header onChange={handleSearch} />
      <div>
        <UserList data={data} key={data.id} />
      </div>
    </div>
  );
}

export default App;
