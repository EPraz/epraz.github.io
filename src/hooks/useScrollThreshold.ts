import { useEffect, useState } from "react";

export const useScrollThreshold = (threshold = 10) => {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setHasPassedThreshold(window.scrollY > threshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [threshold]);

  return hasPassedThreshold;
};
