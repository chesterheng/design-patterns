import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUsers, getUserPosts } from "./services/users";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data: users } = await getUsers();
      users.forEach(async (user) => {
        const { data: posts } = await getUserPosts(user.id);
        console.log(user.name);
        console.log(posts.length);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
