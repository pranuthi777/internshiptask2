import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={() => setMenuOpen(false)}>
          <i className="bi bi-code-slash text-primary me-2"></i>
          Pranuthi
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={menuOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className="nav-link"
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-md-3 mt-2 mt-md-0">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <i className="bi bi-sun-fill"></i>
                ) : (
                  <i className="bi bi-moon-stars-fill"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
