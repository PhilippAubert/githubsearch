import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import UserList from "./components/UserList.js";
import Bookmark from "./components/Bookmark.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

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
    } else if (newUser.length === 0) {
      setUserName("");
    }
  }

  function onShowBookmarks() {
    if (showBookmarks) {
      setShowBookmarks(false);
    } else {
      setShowBookmarks(true);
    }
  }

  return (
    <div className="App">
      <Header onChange={handleSearch} onClick={onShowBookmarks} />
      <UserList data={data} key={data.id} />
      {showBookmarks && <Bookmark onClick={onShowBookmarks} />}
    </div>
  );
}

export default App;
