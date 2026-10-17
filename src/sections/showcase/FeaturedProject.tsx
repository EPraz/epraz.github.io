import { useState } from "react";
import { keelwatch } from "../../contants/keelwatch";

const FeaturedProject = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <article className="featured-work">
      <div className="featured-overview">
        <div className="featured-story">
          <h2 id="keelwatch-title" className="section-title">{keelwatch.title}</h2>
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
      <div className="featured-evidence">
        <div>
          <p className="section-kicker">A closer look</p>
          <h3>A conflict should not cost someone their work.</h3>
          <p>{keelwatch.evidence}</p>
        </div>
        <ol className="evidence-steps">
          <li><h4>Catch the stale save</h4><p>The API rejects a write based on an older Maintenance record.</p></li>
          <li><h4>Keep the draft</h4><p>The editor preserves the visitor’s changes while showing the newer values.</p></li>
          <li><h4>Review, then commit</h4><p>A confirmed change and its history are committed together.</p></li>
        </ol>
      </div>
      <div className="featured-footnote">
        <p>Original personal project with synthetic data. Shared demo accounts identify the role account, not individual visitors.</p>
        <div className="section-actions">
          <a className="site-link" href={keelwatch.demoUrl} target="_blank" rel="noreferrer">Watch walkthrough (4:48)</a>
          <a className="site-link" href={keelwatch.transcriptUrl} target="_blank" rel="noreferrer">Transcript &amp; chapters</a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
