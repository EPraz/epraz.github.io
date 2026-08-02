import { useCallback, useEffect, useRef, useState } from "react";

export const useCooldown = (durationMs: number) => {
  const timerRef = useRef<number | null>(null);
  const [isCoolingDown, setIsCoolingDown] = useState(false);

  const beginCooldown = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    setIsCoolingDown(true);
    timerRef.current = window.setTimeout(() => {
      setIsCoolingDown(false);
      timerRef.current = null;
    }, durationMs);
  }, [durationMs]);

  useEffect(
    () => () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  return { beginCooldown, isCoolingDown };
};
