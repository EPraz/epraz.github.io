import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../components/errors/ErrorBoundary";

const StarsCanvas = lazy(() => import("../components/StarsCanvas"));

const StarfieldController = () => {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={null}>
        <StarsCanvas isEnabled />
      </ErrorBoundary>
    </Suspense>
  );
};

export default StarfieldController;
