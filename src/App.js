import { useState } from 'react';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import './App.css';

function App() {
  let [userData, setUserData] = useState({});
  let [error, setError] = useState({});
  function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`).then(response => {
      let status = response.ok;
      response.json().then((data) => {
        if (status) {
          setUserData(data);
        } else {
          setError(data);
        }
      })
    })
  }
  return (
    <div className="app">
      <Header/>
      <SearchBar handleInput={fetchUserData}/>
    </div>
  );
}

export default App;
