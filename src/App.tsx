import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import { ErrorBoundary } from "./components/errors/ErrorBoundary";
import { SceneErrorFallback } from "./components/errors/ErrorFallbacks";
import Experience from "./sections/experience/Experience";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Showcase from "./sections/showcase/Showcase";
import TechStack from "./sections/techStack/TechStack";

const Contact = lazy(() => import("./sections/contact/Contact"));

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Showcase />
        <Experience />
        <TechStack />
        <About />
        <section id="contact" tabIndex={-1} aria-label="Contact">
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
                <div
                  className="section-padding min-h-96"
                  aria-busy="true"
                  aria-label="Loading contact section"
                />
              }
            >
              <Contact />
            </Suspense>
          </ErrorBoundary>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default App;
