import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { profile } from '../data/profile';
import usePageTitle from './usePageTitle';

export default function Home() {
  usePageTitle('');

  return (
    <>
      <Hero />

      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title">About Me</h2>
          <p className="lead mx-auto about-preview">{profile.shortAbout}</p>
          <Link to="/about" className="btn btn-outline-primary">
            Read More
          </Link>
        </div>
      </section>

      <Projects />
      <Skills />

      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Let’s Work Together</h2>
          <p className="lead">Have a project or an internship opening? I’d love to hear about it.</p>
          <Link to="/contact" className="btn btn-light btn-lg px-4">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
