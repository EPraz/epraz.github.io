import { lazy, Suspense } from "react";
import StarfieldController from "./app/StarfieldController";
import { ErrorBoundary } from "./components/errors/ErrorBoundary";
import { SceneErrorFallback } from "./components/errors/ErrorFallbacks";
import {
  Experience,
  FeatureCards,
  Footer,
  Hero,
  Logo,
  Showcase,
  TechStack,
  // Testimonials,
} from "./sections";

const Contact = lazy(() => import("./sections/contact/Contact"));

const App = () => {
  return (
    <main>
      <div className="relative z-[10]">
        <StarfieldController />
        <Hero />
        <Showcase />
        <Logo />
        <FeatureCards />
        <Experience />
        <TechStack />
        {/* <Testimonials /> */}
        <ErrorBoundary
          fallback={(fallbackProps) => (
            <SceneErrorFallback
              {...fallbackProps}
              label="The contact section"
            />
          )}
        >
          <Suspense
            fallback={
              <section
                className="section-padding min-h-96"
                aria-busy="true"
                aria-label="Loading contact section"
              />
            }
          >
            <Contact />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </main>
  );
};

export default App;
