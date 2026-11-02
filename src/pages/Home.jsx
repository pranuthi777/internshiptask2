import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowIcon } from '../components/Icons';
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
      <section className="container">
        <div className="cta">
          <h2>Have a project or an opening in mind?</h2>
          <p>I’m always happy to hear about new projects and chances to learn.</p>
          <Link to="/contact" className="button light">
            Get in touch <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
