import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <header className="hero bg-primary text-white text-center">
      <div className="container py-5">
        <div className="avatar mx-auto mb-4">{profile.initials}</div>
        <h1 className="display-4 fw-bold">{profile.name}</h1>
        <p className="lead mb-4">{profile.title}</p>
        <Link to="/contact" className="btn btn-light btn-lg px-4 me-2 mb-2">
          Hire Me
        </Link>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light btn-lg px-4 mb-2"
        >
          <i className="bi bi-github me-2"></i>GitHub
        </a>
      </div>
    </header>
  );
}
