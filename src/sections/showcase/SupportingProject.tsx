import { useState } from "react";
import type { SupportingProjectData } from "../../contants/selectedProjects";
import "./supporting-project.css";

const SupportingProject = ({ project }: { project: SupportingProjectData }) => {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const titleId = `${project.id}-title`;

  return (
    <article className="supporting-project" aria-labelledby={titleId}>
      <div className="supporting-project-media">
        {imageUnavailable ? (
          <p role="status">{project.status === "live" ? "Preview unavailable. You can still open the live project below." : "Preview unavailable. You can still view the code below."}</p>
        ) : (
          <img src={project.cover} alt={project.coverAlt} width={project.width} height={project.height} loading="lazy" decoding="async" onError={() => setImageUnavailable(true)} />
        )}
      </div>
      <div className="supporting-project-body">
        <p className="section-kicker">{project.category}</p>
        <h3 id={titleId}>{project.title}</h3>
        <p className="supporting-project-summary">{project.summary}</p>
        <ul className="project-technologies" aria-label={`${project.title} technologies`}>
          {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <div className="section-actions">
          {project.status === "live" ? (
            <a className="site-link" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} <span aria-hidden="true">↗</span></a>
          ) : (
            <span className="section-kicker">{project.status === "unpublished" ? "Public demo coming soon" : "In development"}</span>
          )}
          {project.repoUrl && <a className="site-link" href={project.repoUrl} target="_blank" rel="noreferrer">View code</a>}
          {project.walkthroughUrl && <a className="site-link" href={project.walkthroughUrl} target="_blank" rel="noreferrer">{project.walkthroughLabel ?? "Watch walkthrough"}</a>}
        </div>
        <p className="supporting-project-note">{project.note}</p>
      </div>
    </article>
  );
};

export default SupportingProject;
