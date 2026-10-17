import { createRoot, extend, type RootState } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AmbientLight, BoxGeometry, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial } from "three";
import { ErrorBoundary } from "../../../components/errors/ErrorBoundary";
import WebGLContextGuard from "../../../components/webgl/WebGLContextGuard";
import AssemblyParts from "./AssemblyParts";

extend({ AmbientLight, BoxGeometry, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial });

type AssemblyCanvasProps = { onReady: () => void; onUnavailable: () => void };

const AssemblyCanvas = ({ onReady, onUnavailable }: AssemblyCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Each effect owns its canvas, including StrictMode's setup/cleanup replay.
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);
    const root = createRoot(canvas);
    let active = true;
    let configured = false;
    let state: RootState | undefined;
    const dispose = () => { if (configured) root.unmount(); };
    const tokens = getComputedStyle(document.documentElement);
    const color = (name: string) => tokens.getPropertyValue(name).trim();
    const colors = { interface: color("--site-link"), api: color("--site-accent"), data: color("--site-muted"), connector: color("--site-border") };
    const size = () => ({ width: container.clientWidth, height: container.clientHeight, top: 0, left: 0 });
    const observer = new ResizeObserver(() => {
      const next = size();
      state?.setSize(next.width, next.height);
    });
    observer.observe(container);

    // Catch asynchronous renderer setup too; a React boundary alone cannot do that.
    void root.configure({
      frameloop: "demand", dpr: [1, 1.25], size: size(),
      camera: { position: [4.5, 3.5, 7], fov: 35 },
      gl: { powerPreference: "low-power", antialias: true },
    }).then(() => {
      configured = true;
      if (!active) { dispose(); return; }
      state = root.render(
        <ErrorBoundary fallback={null} onError={onUnavailable}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 6, 5]} intensity={2} />
          <WebGLContextGuard onContextLost={onUnavailable} />
          <AssemblyParts colors={colors} onReady={onReady} onUnavailable={onUnavailable} />
        </ErrorBoundary>,
      ).getState();
    }).catch(() => {
      configured = true;
      dispose();
      if (active) onUnavailable();
    });

    return () => { active = false; observer.disconnect(); canvas.remove(); dispose(); };
  }, [onReady, onUnavailable]);

  return (
    <div ref={containerRef} className="system-canvas" role="img" aria-label="3D assembly of interface, API and data modules" />
  );
};

export default AssemblyCanvas;
