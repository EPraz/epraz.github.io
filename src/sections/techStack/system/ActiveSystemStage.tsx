import { lazy, Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "../../../components/errors/ErrorBoundary";
import SystemDiagram from "./SystemDiagram";

const AssemblyCanvas = lazy(() => import("./AssemblyCanvas"));

const ActiveSystemStage = ({ onUnavailable }: { onUnavailable: () => void }) => {
  // Readiness belongs to this mounted attempt, never a previous canvas.
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  return (
    <div className="system-render" data-ready={ready}>
      <SystemDiagram />
      <ErrorBoundary fallback={null} onError={onUnavailable}>
        <Suspense fallback={<p role="status" className="system-feedback">Loading the 3D view…</p>}>
          <AssemblyCanvas onReady={onReady} onUnavailable={onUnavailable} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ActiveSystemStage;
