import { useState } from "react";
import { navigateProject } from "../../contants/navigate";
import "./navigate-project.css";

const NavigateProject = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <article className="navigate-project" aria-labelledby="navigate-title">
      <div className="featured-story">
        <p className="section-kicker">Frontend project</p>
        <h2 id="navigate-title" className="section-title">{navigateProject.title}</h2>
        <p className="featured-subtitle">{navigateProject.subtitle}</p>
        <p className="featured-role">{navigateProject.role}</p>
        <p>{navigateProject.summary}</p>
        <ul className="technology-list" aria-label="NAVIGATE technologies">
          {navigateProject.stack.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        <div className="section-actions">
          <a className="site-link" href={navigateProject.liveUrl} target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure className="featured-capture">
        <div className="navigate-image">
          {imageUnavailable ? (
            <p role="status">Preview unavailable. Visit the website to explore NAVIGATE.</p>
          ) : (
            <img src={navigateProject.cover} alt={navigateProject.coverAlt} width={1024} height={2050} loading="lazy" decoding="async" onError={() => setImageUnavailable(true)} />
          )}
        </div>
        <figcaption>Live landing page · source repository private.</figcaption>
      </figure>
    </article>
  );
};

export default NavigateProject;
