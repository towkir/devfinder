import { useState } from 'react';
import IconSearch from 'components/VectorIcons/IconSearch';
import './SearchBar.css';

function SearchBar({handleInput}) {
  let [userName, setUserName] = useState('');
  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }
  return (
    <div className="searchbar">
      <IconSearch/>
      <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Search GitHub username…"/>
      <button onClick={() => handleInput(userName)} disabled={userName.length === 0}>Search</button>
    </div>
  )
}

export default SearchBar;
