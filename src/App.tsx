import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import { ErrorBoundary } from "./components/errors/ErrorBoundary";
import ContactUnavailable from "./sections/contact/ContactUnavailable";
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
            fallback={<ContactUnavailable />}
          >
            <Suspense
              fallback={<ContactUnavailable loading />}
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
