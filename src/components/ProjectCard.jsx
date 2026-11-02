import { ExternalIcon, StarIcon } from './Icons';

export default function ProjectCard({ project, onStar }) {
  return (
    <article className="project-card">
      <div className="project-preview">
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
        ) : (
          <pre className="code-preview">
            <code>{project.code.join('\n')}</code>
          </pre>
        )}
        <button
          type="button"
          className={project.starred ? 'star-button starred' : 'star-button'}
          onClick={() => onStar(project.id)}
          aria-label={project.starred ? `Unstar ${project.title}` : `Star ${project.title}`}
          aria-pressed={project.starred}
        >
          <StarIcon filled={project.starred} />
        </button>
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span>{project.category === 'java' ? 'Java' : 'Web'}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="chips">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {(project.liveUrl || project.repoUrl) && (
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site <ExternalIcon />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Source code <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
