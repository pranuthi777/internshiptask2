import Skills from '../components/Skills';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <section className="py-5">
        <div className="container">
          <h1 className="section-title text-center">About Me</h1>
          <div className="row g-4 align-items-center mt-1">
            <div className="col-lg-4 text-center">
              <div className="avatar avatar-lg mx-auto">{profile.initials}</div>
            </div>
            <div className="col-lg-8">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="fs-5">
                  {paragraph}
                </p>
              ))}
              <ul className="list-group list-group-flush mt-4">
                {profile.facts.map((fact) => (
                  <li key={fact.label} className="list-group-item px-0 bg-transparent">
                    <i className={`bi ${fact.icon} text-primary me-2`}></i>
                    <strong>{fact.label}:</strong> {fact.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
}
