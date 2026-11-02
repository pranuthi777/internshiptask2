import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '../context';
import { categories } from '../data/projects';
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
    <section className="py-5 bg-body-tertiary">
      <div className="container">
        {showAll ? (
          <h1 className="section-title text-center">My Projects</h1>
        ) : (
          <h2 className="section-title text-center">Projects</h2>
        )}

        {showAll && (
          <div className="row g-3 justify-content-between align-items-center my-3">
            <div className="col-md-auto">
              <div className="btn-group flex-wrap" role="group" aria-label="Filter projects">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    className={category === c.value ? 'btn btn-primary' : 'btn btn-outline-primary'}
                    onClick={() => setCategory(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search projects..."
                  aria-label="Search projects"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {shown.length === 0 ? (
          <div className="alert alert-secondary text-center mt-4">
            No projects found.{' '}
            {showAll && (
              <button
                type="button"
                className="btn btn-link p-0 align-baseline"
                onClick={() => {
                  setCategory('all');
                  setSearch('');
                }}
              >
                Show all
              </button>
            )}
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-1 justify-content-center">
            {shown.map((project) => (
              <div className="col" key={project.id}>
                <ProjectCard project={project} onStar={toggleStar} />
              </div>
            ))}
          </div>
        )}

        {!showAll && (
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-outline-primary">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
