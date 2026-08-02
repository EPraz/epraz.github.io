import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useExperienceAnimations = (
  sectionRef: RefObject<HTMLElement | null>,
) => {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.utils
        .toArray<HTMLElement>(".timeline-card", section)
        .forEach((card) => {
          gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          });
        });

      const timeline = section.querySelector<HTMLElement>(".timeline");
      const timelineLines = gsap.utils.toArray<HTMLElement>(
        ".timeline-line",
        section,
      );

      if (timeline && timelineLines.length > 0) {
        gsap.to(timelineLines, {
          transformOrigin: "bottom bottom",
          ease: "power1.inOut",
          scaleY: 0,
          scrollTrigger: {
            trigger: timeline,
            start: "top center",
            end: "70% center",
            scrub: true,
          },
        });
      }

      gsap.utils
        .toArray<HTMLElement>(".experience-copy", section)
        .forEach((copy) => {
          gsap.from(copy, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: copy,
              start: "top 60%",
            },
          });
        });
    },
    { scope: sectionRef },
  );
};
