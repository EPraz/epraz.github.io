import { useEffect, useState } from "react";

interface BatteryManager extends EventTarget {
  charging: boolean;
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

export const useLowPowerMode = () => {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const batteryNavigator = navigator as NavigatorWithBattery;
    let batteryManager: BatteryManager | null = null;
    let isActive = true;
    let prefersReducedMotion = reducedMotionQuery.matches;

    const updateMode = () => {
      if (!isActive) return;

      setIsLowPowerMode(
        prefersReducedMotion ||
          Boolean(batteryManager && !batteryManager.charging),
      );
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      updateMode();
    };

    const handleChargingChange = () => updateMode();

    updateMode();
    reducedMotionQuery.addEventListener(
      "change",
      handleMotionPreferenceChange,
    );

    const batteryRequest = batteryNavigator.getBattery?.();
    if (batteryRequest) {
      void batteryRequest
        .then((battery) => {
          if (!isActive) return;

          batteryManager = battery;
          batteryManager.addEventListener(
            "chargingchange",
            handleChargingChange,
          );
          updateMode();
        })
        .catch(() => {
          batteryManager = null;
          updateMode();
        });
    }

    return () => {
      isActive = false;
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
      batteryManager?.removeEventListener(
        "chargingchange",
        handleChargingChange,
      );
    };
  }, []);

  return isLowPowerMode;
};
