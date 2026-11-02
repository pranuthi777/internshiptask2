import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
