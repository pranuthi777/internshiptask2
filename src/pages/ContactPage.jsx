import Contact from '../components/Contact';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="section-title text-center">Contact Me</h1>
        <p className="text-center text-body-secondary mb-5">
          Have a question or want to work together? Send me a message!
        </p>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card shadow-sm mb-3">
              <div className="card-body d-flex align-items-center">
                <i className="bi bi-envelope-fill fs-3 text-primary me-3"></i>
                <div className="text-break">
                  <h6 className="mb-0">Email</h6>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
            </div>
            <div className="card shadow-sm">
              <div className="card-body d-flex align-items-center">
                <i className="bi bi-github fs-3 text-primary me-3"></i>
                <div>
                  <h6 className="mb-0">GitHub</h6>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    pranuthi777
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}
