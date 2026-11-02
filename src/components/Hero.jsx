import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { techStrip } from '../data/skills';
import { ArrowIcon } from './Icons';

export default function Hero() {
  return (
    <>
      <section className="hero container">
        <div className="hero-text">
          <p className="badge">
            <span className="dot" /> {profile.role}
          </p>
          <h1 className="hero-title">
            Hi, I’m {profile.firstName}.<br />
            <span className="accent-text">I build for the web.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="button-row">
            <Link to="/projects" className="button primary">
              View my work <ArrowIcon />
            </Link>
            <Link to="/contact" className="button outline">
              Contact me
            </Link>
          </div>
        </div>

        <aside className="now-card">
          <p className="now-title">Right now</p>
          <ul>
            {profile.now.map((item, index) => (
              <li key={item.label}>
                <span className="now-number">0{index + 1}</span>
                <span>
                  <span className="now-label">{item.label}</span>
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {/* list is repeated so the scroll animation loops without a gap */}
          {[...techStrip, ...techStrip].map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </>
  );
}
