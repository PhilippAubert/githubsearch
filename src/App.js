import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import User from "./components/User.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("example");

  useEffect(() => {
    fetch(`https://api.github.com/users?per_page=100&page=1`, {
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
        {data && data.map((data) => <User data={data} key={data.id} />)}
      </div>
    </div>
  );
}

export default App;
