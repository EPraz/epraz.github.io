import { useState } from "react";
import { keelwatch } from "../../contants/keelwatch";
import KeelwatchDetails from "./KeelwatchDetails";

const FeaturedProject = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <article className="featured-work" aria-labelledby="keelwatch-title">
      <div className="featured-overview">
        <div className="featured-story">
          <p className="section-kicker">Featured · Full-stack</p>
          <h3 id="keelwatch-title" className="section-title">{keelwatch.title}</h3>
          <p className="featured-subtitle">{keelwatch.subtitle}</p>
          <p className="featured-role">{keelwatch.role}</p>
          <p>{keelwatch.summary}</p>
          <ul className="technology-list" aria-label="Keelwatch technologies">
            {keelwatch.stack.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
          <div className="section-actions">
            <a className="site-button site-button-primary" href={keelwatch.caseStudyUrl} target="_blank" rel="noreferrer">Read case study <span aria-hidden="true">↗</span></a>
            <a className="site-link" href={keelwatch.liveUrl} target="_blank" rel="noreferrer">Explore demo</a>
            <a className="site-link" href={keelwatch.repoUrl} target="_blank" rel="noreferrer">View code</a>
          </div>
        </div>
        <figure className="featured-capture">
          <div className="featured-image">
            {imageUnavailable ? (
              <p role="status">Preview unavailable. The case study and Maintenance captures explain the same workflow.</p>
            ) : (
              <img src={keelwatch.cover} alt={keelwatch.coverAlt} width={1440} height={1100} loading="lazy" decoding="async" onError={() => setImageUnavailable(true)} />
            )}
          </div>
          <figcaption>Real local app, API and PostgreSQL · synthetic data. <a className="site-link" href={keelwatch.captureUrl} target="_blank" rel="noreferrer">Inspect the Maintenance captures</a></figcaption>
        </figure>
      </div>
      <KeelwatchDetails />
    </article>
  );
};

export default FeaturedProject;
