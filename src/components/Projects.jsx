import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../context';
import { categories } from '../data/projects';

// On the home page (showAll = false) only starred projects are shown.
export default function Projects({ showAll = false }) {
  const { projects, toggleStar } = useContext(ProjectsContext);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  let shown = projects;
  if (!showAll) {
    shown = projects.filter((p) => p.starred);
  } else {
    if (category === 'starred') shown = shown.filter((p) => p.starred);
    else if (category !== 'all') shown = shown.filter((p) => p.category === category);

    const query = search.trim().toLowerCase();
    if (query) {
      shown = shown.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }
  }

  return (
    <section className="section">
      {showAll ? <h1>Projects</h1> : <h2>Some things I’ve made</h2>}

      {showAll && (
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              className={category === c.value ? 'active' : ''}
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </button>
          ))}
          <input
            type="search"
            placeholder="Search by name or language"
            aria-label="Search projects"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {shown.length === 0 && <p className="muted">Nothing here yet.</p>}

      <ul className="project-list">
        {shown.map((project) => (
          <li key={project.id} className="project">
            <div className="project-head">
              <h3>{project.title}</h3>
              <span className="muted">{project.year}</span>
              <button
                type="button"
                className={project.starred ? 'star starred' : 'star'}
                aria-label={project.starred ? `Unstar ${project.title}` : `Star ${project.title}`}
                onClick={() => toggleStar(project.id)}
              >
                {project.starred ? '★' : '☆'}
              </button>
            </div>
            <p>{project.description}</p>
            <p className="tags">{project.tags.join(' · ')}</p>
            {(project.liveUrl || project.repoUrl) && (
              <p className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live site ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>

      {!showAll && <Link to="/projects">All projects →</Link>}
    </section>
  );
}
