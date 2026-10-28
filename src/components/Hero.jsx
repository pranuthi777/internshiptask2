import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I’m {profile.firstName}.</h1>
      <p className="lead">{profile.intro}</p>
      <p className="hero-links">
        <Link to="/projects">See my projects →</Link>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </p>

      <div className="now">
        <h2>Right now</h2>
        <ul>
          {profile.now.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
