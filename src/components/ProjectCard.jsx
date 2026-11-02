export default function ProjectCard({ project, onStar }) {
  return (
    <div className="card project-card h-100 shadow-sm">
      <div className="position-relative">
        <img src={project.image} className="card-img-top" alt={`Screenshot of ${project.title}`} />
        <button
          type="button"
          className="btn btn-light btn-sm rounded-circle star-btn shadow-sm"
          onClick={() => onStar(project.id)}
          aria-label={project.starred ? `Unstar ${project.title}` : `Star ${project.title}`}
          aria-pressed={project.starred}
        >
          <i className={project.starred ? 'bi bi-star-fill text-warning' : 'bi bi-star'}></i>
        </button>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{project.title}</h5>
        <p className="card-text text-body-secondary">{project.description}</p>
        <div className="mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm me-2"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="bi bi-github me-1"></i>Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
