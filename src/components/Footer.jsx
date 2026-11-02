import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="mb-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-white fs-4 mx-2"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href={`mailto:${profile.email}`} className="text-white fs-4 mx-2" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        <p className="mb-0 small text-white-50">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
