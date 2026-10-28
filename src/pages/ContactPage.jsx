import Contact from '../components/Contact';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');

  return (
    <section className="section">
      <h1>Contact</h1>
      <p>
        Fill in the form below or email me at{' '}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      <Contact />
    </section>
  );
}
