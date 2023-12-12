import { useState, useEffect } from 'react';
import IconSearch from 'components/VectorIcons/IconSearch';
import './SearchBar.css';

function SearchBar({handleInput, errorMessage}) {
  let [userName, setUserName] = useState('octocat');
  let [inputValueChanged, setInputValueChanged] = useState(false);
  function handleUserNameChange(e) {
    setUserName(e.target.value);
    setInputValueChanged(true);
  }
  function submitForm(event) {
    event.preventDefault();
    handleInput(userName);
  }
  useEffect(() => {
    handleInput(userName);
  }, []);
  useEffect(() => {
    setInputValueChanged(false);
  }, [errorMessage]);
  return (
    <form className="searchbar" onSubmit={submitForm}>
      <IconSearch/>
      <input type="text" value={userName} onChange={handleUserNameChange} placeholder="Search GitHub username…"/>
      <span className="error">{!inputValueChanged ? errorMessage : ''}</span>
      <button type="submit" disabled={userName.length === 0}>Search</button>
    </form>
  )
}

export default SearchBar;
