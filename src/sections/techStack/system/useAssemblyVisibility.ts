import { useEffect, useRef, useState } from "react";

export const useAssemblyVisibility = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(stage);
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return { stageRef, visible: inView && pageVisible };
};
