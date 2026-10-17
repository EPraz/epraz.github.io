import { useState } from "react";
import { keelwatch } from "../../contants/keelwatch";

const KeelwatchDetails = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <details className="featured-details">
      <summary>How Keelwatch handles conflicting edits</summary>
      <div className="featured-evidence">
        <div>
          <h4>A conflict should not cost someone their work.</h4>
          <p>{keelwatch.evidence}</p>
        </div>
        <ol className="evidence-steps">
          <li><h5>Catch the stale save</h5><p>The API rejects a write based on an older Maintenance record.</p></li>
          <li><h5>Keep the draft</h5><p>The editor preserves the visitor’s changes while showing the newer values.</p></li>
          <li><h5>Review, then commit</h5><p>A confirmed change and its history are committed together.</p></li>
        </ol>
      </div>
      <figure className="featured-capture featured-conflict-capture">
        <div className="featured-image">
          {imageUnavailable ? (
            <p role="status">Preview unavailable. Open the Maintenance captures for the full conflict and recovery journey.</p>
          ) : (
            <img src={keelwatch.conflictCover} alt={keelwatch.conflictCoverAlt} width={1440} height={1100} loading="lazy" decoding="async" onError={() => setImageUnavailable(true)} />
          )}
        </div>
        <figcaption>A retained draft alongside newer Maintenance values, captured in the local app with synthetic data. <a className="site-link" href={keelwatch.captureUrl} target="_blank" rel="noreferrer">Inspect the Maintenance captures</a></figcaption>
      </figure>
      <div className="featured-footnote">
        <p>Original personal project with synthetic data. Shared demo accounts identify the role account, not individual visitors.</p>
        <div className="section-actions">
          <a className="site-link" href={keelwatch.demoUrl} target="_blank" rel="noreferrer">Watch walkthrough (4:48)</a>
          <a className="site-link" href={keelwatch.transcriptUrl} target="_blank" rel="noreferrer">Transcript &amp; chapters</a>
        </div>
      </div>
    </details>
  );
};

export default KeelwatchDetails;
