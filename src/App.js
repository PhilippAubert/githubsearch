import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";

import UserList from "./components/UserList.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api.github.com/users?per_page=100&page=1/";
    let url = baseUrl;

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
      setUserName(newUser);
    }
  }

  return (
    <div className="App">
      <Header onInput={handleSearch} />
      <div>
        <UserList data={data} />
      </div>
    </div>
  );
}

export default App;
