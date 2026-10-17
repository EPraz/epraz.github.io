import { useEffect, useState } from "react";
import { useLowPowerMode } from "../../../hooks/useLowPowerMode";

type DataConnection = EventTarget & { saveData?: boolean; effectiveType?: string };
type DeviceNavigator = Navigator & { deviceMemory?: number; connection?: DataConnection };

const hasDeviceConstraint = () => {
  const device = navigator as DeviceNavigator;
  return navigator.hardwareConcurrency <= 4 || (device.deviceMemory ?? 8) <= 4 ||
    Boolean(device.connection?.saveData) || /(^|-)2g$/.test(device.connection?.effectiveType ?? "");
};

export const useAssemblyPreferences = () => {
  const lowPower = useLowPowerMode();
  const [constrained, setConstrained] = useState(hasDeviceConstraint);

  useEffect(() => {
    const connection = (navigator as DeviceNavigator).connection;
    const update = () => setConstrained(hasDeviceConstraint());
    connection?.addEventListener("change", update);
    return () => connection?.removeEventListener("change", update);
  }, []);

  return !lowPower && !constrained && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
