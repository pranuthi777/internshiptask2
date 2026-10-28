import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import usePageTitle from './usePageTitle';

export default function Home() {
  usePageTitle('');

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <section className="section">
        <h2>Say hello</h2>
        <p>
          If you’d like to talk about an internship, a project or anything on this site,{' '}
          <Link to="/contact">send me a message</Link>.
        </p>
      </section>
    </>
  );
}
