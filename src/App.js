import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <div className="App">
      <h1>GIT HUB USERS</h1>
      <p>{data.url}</p>
    </div>
  );
}

export default App;
