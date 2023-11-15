import IconMoon from 'components/VectorIcons/IconMoon';
import IconSun from 'components/VectorIcons/IconSun';
import './ThemeToggler.css';
import { useState, useEffect } from 'react';
function ThemeToggler() {
  useEffect(() => {
    retrieveAndApplyTheme();
  });
  let [currentTheme, setCurrentTheme] = useState(localStorage.getItem('devfinder-theme') || 'light');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  function retrieveAndApplyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
  function toggleTheme() {
    setTheme(nextTheme);
  }
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('devfinder-theme', theme);
    setCurrentTheme(theme)
  }
  return (
    <label className="theme-toggler" onClick={toggleTheme}>
      <span className="switch-to">{nextTheme}</span>
      { nextTheme === 'dark' ? <IconMoon /> : <IconSun /> }
    </label>
  );
}

export default ThemeToggler;
