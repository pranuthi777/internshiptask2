import Skills from '../components/Skills';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function About() {
  usePageTitle('About');

  return (
    <>
      <section className="section">
        <h1>About me</h1>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <Skills />
    </>
  );
}
