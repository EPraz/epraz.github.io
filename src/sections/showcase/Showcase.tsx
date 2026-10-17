import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { projects } from "../../contants";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const motionPreference = gsap.matchMedia();
      motionPreference.add("(prefers-reduced-motion: no-preference)", () => {
        const projectCards = gsap.utils.toArray<HTMLElement>(
          ".project-card",
          section,
        );

        gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.9 });
        gsap.set(projectCards, { y: 24, opacity: 0 });

        const triggers = ScrollTrigger.batch(projectCards, {
          start: "top 85%",
          onEnter: (elements) =>
            gsap.to(elements, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            }),
        });

        return () => triggers.forEach((trigger) => trigger.kill());
      });

      return () => motionPreference.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      tabIndex={-1}
      aria-labelledby="work-title"
      className="section-padding scroll-mt-32 sm:scroll-mt-24"
    >
      <h2 id="work-title" className="mb-6 text-2xl font-semibold md:text-3xl">
        Selected work
      </h2>
      <FeaturedProject />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
