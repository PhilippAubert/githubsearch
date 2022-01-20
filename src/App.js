import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import UserList from "./components/UserList.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let url;
    if (!userName) {
      url = `https://api.github.com/search/users?per_page=100&q=defunkt`;
    }

    if (userName) {
      url = `https://api.github.com/search/users?per_page=100&q=${userName}`;
    }

    fetch(url, {
      method: "GET",
      accept: "application/vnd.github.v3+json",
      headers: {
        Authorization: "token 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",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error("error", error));
  }, [userName]);

  function handleSearch(e) {
    e.preventDefault();
    const newUser = e.target.value;
    if (newUser.length > 2) {
      setUserName([newUser]);
      console.log(typeof newUser);
    } else if (newUser.length === 0) {
      setUserName("");
    }
  }

  return (
    <div className="App">
      <Header onChange={handleSearch} />
      <UserList data={data} key={data.id} />
    </div>
  );
}

export default App;
