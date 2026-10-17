import { useEffect, useState } from "react";
import { navLinks } from "../contants/navLinks";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sections = navLinks.map(({ link }) => ({
      link,
      element: document.querySelector<HTMLElement>(link),
    }));
    let frame = 0;

    const update = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.3, 200);
      let current = "#hero";

      for (const { link, element } of sections) {
        if (element && element.getBoundingClientRect().top <= readingLine) {
          current = link;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = navLinks[navLinks.length - 1].link;
      }
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return activeSection;
};
