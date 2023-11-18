import IconSearch from 'components/VectorIcons/IconSearch';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="searchbar">
      <IconSearch/>
      <input type="text" placeholder="Search GitHub username…"/>
      <button>Search</button>
    </div>
  )
}

export default SearchBar;
