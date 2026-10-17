import SystemDiagram from "./SystemDiagram";
import "./connected-system.css";

const ConnectedSystem = () => {
  return (
    <figure className="connected-system" aria-labelledby="system-title">
      <figcaption>
        <p className="section-kicker">How the pieces connect</p>
        <h3 id="system-title">From interface to data.</h3>
      </figcaption>
      <div>
        <div className="system-stage">
          <SystemDiagram />
        </div>
        <ol className="system-legend" aria-label="Connected system responsibilities">
          <li><strong>Interface</strong><span>Clear workflows</span></li>
          <li><strong>API</strong><span>Validation &amp; rules</span></li>
          <li><strong>Data</strong><span>Consistency &amp; history</span></li>
        </ol>
      </div>
    </figure>
  );
};

export default ConnectedSystem;
