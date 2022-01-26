import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import UserList from "./components/UserList.js";
import Bookmark from "./components/Bookmark.js";
import Footer from "./components/Footer.js";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);

  useEffect(() => {
    let url;
    const options = {
      method: "GET",
      accept: "application/vnd.github.v3+json",
    };

    if (userName) {
      url = `https://api.github.com/search/users?per_page=100&q=${userName}`;
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error("error", error));

    fetch(`https://api.github.com/users/${userName}/followers`, options)
      .then((response) => response.json())
      .then((followers) => setFollowers("Followers", followers))
      .catch((error) => console.error("error", error));

    fetch(`https://api.github.com/users/${userName}/repos`, options)
      .then((res) => res.json())
      .then((repos) => setRepos(repos))
      .catch((e) => console.error("error", e));
  }, [userName]);

  function handleSearch(e) {
    e.preventDefault();
    const newUser = e.target.value;
    if (newUser.length > 2) {
      setUserName([newUser]);
      setShowInitialText(false);
    } else {
      setShowInitialText(true);
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
      {showInitialText ? (
        <p className="Initial-Text">type to search </p>
      ) : (
        <UserList
          data={data}
          key={data.id}
          followers={followers}
          repos={repos}
        />
      )}
      {showBookmarks && (
        <Bookmark
          onClick={onShowBookmarks}
          followers={followers}
          repos={repos}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
