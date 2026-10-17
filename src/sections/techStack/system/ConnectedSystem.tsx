import { lazy, Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "../../../components/errors/ErrorBoundary";
import SystemDiagram from "./SystemDiagram";
import { useAssemblyPreferences } from "./useAssemblyPreferences";
import { useAssemblyVisibility } from "./useAssemblyVisibility";
import "./connected-system.css";

const AssemblyCanvas = lazy(() => import("./AssemblyCanvas"));

const ConnectedSystem = () => {
  const permitted = useAssemblyPreferences();
  const { stageRef, visible } = useAssemblyVisibility();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onUnavailable = useCallback(() => { setFailed(true); setReady(false); }, []);
  const showScene = enabled && permitted && visible && !failed;

  return (
    <figure className="connected-system" aria-labelledby="system-title">
      <figcaption>
        <p className="section-kicker">How the pieces connect</p>
        <h3 id="system-title">A clear interface is one part of the system.</h3>
        <p>I care about the whole path: how a workflow feels, how the API handles a request and how the data stays consistent.</p>
        <p className="system-note">A sketch of the responsibilities I bring together in full-stack work.</p>
      </figcaption>
      <div>
        <div ref={stageRef} id="system-stage" className="system-stage" data-ready={showScene && ready}>
          <SystemDiagram />
          {showScene && (
            <ErrorBoundary fallback={null} onError={onUnavailable}>
              <Suspense fallback={<p role="status" className="system-feedback">Loading the 3D view…</p>}>
                <AssemblyCanvas onReady={onReady} onUnavailable={onUnavailable} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>
        <ol className="system-legend" aria-label="Connected system responsibilities">
          <li><strong>Interface</strong><span>Clear workflows</span></li>
          <li><strong>API</strong><span>Validation &amp; rules</span></li>
          <li><strong>Data</strong><span>Consistency &amp; history</span></li>
        </ol>
        <div className="system-controls">
          {permitted && !failed && (
            <button type="button" className="site-button" aria-pressed={enabled} aria-controls="system-stage" onClick={() => { setEnabled((current) => !current); setReady(false); }}>
              {enabled ? "Use static view" : "Play 3D assembly"}
            </button>
          )}
          {failed && <p role="status">The 3D view is unavailable. The diagram remains available.</p>}
          {!permitted && <p>Static view respects your motion, data-saving and device preferences.</p>}
        </div>
      </div>
    </figure>
  );
};

export default ConnectedSystem;
