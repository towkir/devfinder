import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>devfinder</h1>
      <ThemeToggler />
    </header>
  )
}

export default Header;
