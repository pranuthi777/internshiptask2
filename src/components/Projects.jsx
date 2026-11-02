import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../context';
import { categories } from '../data/projects';
import { ArrowIcon } from './Icons';
import ProjectCard from './ProjectCard';

// On the home page (showAll = false) only starred projects are shown, without filters.
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
    <section className="section container">
      <div className="section-head">
        <div>
          <p className="kicker">Projects</p>
          {showAll ? <h1>Things I’ve built</h1> : <h2>Selected work</h2>}
        </div>
        {!showAll && (
          <Link to="/projects" className="arrow-link">
            All projects <ArrowIcon />
          </Link>
        )}
      </div>

      {showAll && (
        <div className="filters">
          <div className="filter-buttons">
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
          </div>
          <input
            type="search"
            placeholder="Search by name or language…"
            aria-label="Search projects"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {shown.length === 0 ? (
        <div className="empty">
          <p>No projects match that.</p>
          {showAll && (
            <button
              type="button"
              className="button outline"
              onClick={() => {
                setCategory('all');
                setSearch('');
              }}
            >
              Show all projects
            </button>
          )}
        </div>
      ) : (
        <div className="project-grid">
          {shown.map((project) => (
            <ProjectCard key={project.id} project={project} onStar={toggleStar} />
          ))}
        </div>
      )}
    </section>
  );
}
