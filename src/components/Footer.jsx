import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} ·{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
