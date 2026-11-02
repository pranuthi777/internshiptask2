import Contact from '../components/Contact';
import { ExternalIcon } from '../components/Icons';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');

  return (
    <section className="section container page-top">
      <div className="contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="page-title">Let’s talk</h1>
          <p className="lead">
            Whether it’s a project, an internship or just a question about something I’ve built,
            I’d love to hear from you.
          </p>

          <div className="contact-list">
            <div>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/pranuthi777 <ExternalIcon />
              </a>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </section>
  );
}
