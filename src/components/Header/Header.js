import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import './Header.css'

function Header() {
  return (
    <header className="Header">
      <h1>devfinder</h1>
      <ThemeToggler theme={'dark'} />
    </header>
  )
}

export default Header;
