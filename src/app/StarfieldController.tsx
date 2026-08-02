import { lazy, Suspense, useState } from "react";
import NavBar from "../components/NavBar";
import { ErrorBoundary } from "../components/errors/ErrorBoundary";

const StarsCanvas = lazy(() => import("../components/StarsCanvas"));

const StarfieldController = () => {
  const [isStarfieldEnabled, setIsStarfieldEnabled] = useState(true);

  return (
    <>
      <Suspense fallback={null}>
        <ErrorBoundary fallback={null}>
          <StarsCanvas isEnabled={isStarfieldEnabled} />
        </ErrorBoundary>
      </Suspense>
      <NavBar
        isStarfieldEnabled={isStarfieldEnabled}
        onStarfieldChange={setIsStarfieldEnabled}
      />
    </>
  );
};

export default StarfieldController;
