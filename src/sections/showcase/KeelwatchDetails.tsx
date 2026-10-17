import { keelwatch } from "../../contants/keelwatch";

const KeelwatchDetails = () => (
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
    <div className="featured-footnote">
      <p>Original personal project with synthetic data. Shared demo accounts identify the role account, not individual visitors.</p>
      <div className="section-actions">
        <a className="site-link" href={keelwatch.demoUrl} target="_blank" rel="noreferrer">Watch walkthrough (4:48)</a>
        <a className="site-link" href={keelwatch.transcriptUrl} target="_blank" rel="noreferrer">Transcript &amp; chapters</a>
      </div>
    </div>
  </details>
);

export default KeelwatchDetails;
