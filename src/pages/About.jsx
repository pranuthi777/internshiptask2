import Skills from '../components/Skills';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <section className="section container page-top">
        <p className="kicker">About</p>
        <h1 className="page-title">A bit about me</h1>

        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="facts-card">
            <div className="avatar" aria-hidden="true">
              PG
            </div>
            <dl>
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
      <Skills />
    </>
  );
}
