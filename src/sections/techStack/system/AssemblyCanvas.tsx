import { createRoot, extend, type RootState } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AmbientLight, BoxGeometry, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial } from "three";
import { ErrorBoundary } from "../../../components/errors/ErrorBoundary";
import WebGLContextGuard from "../../../components/webgl/WebGLContextGuard";
import AssemblyParts from "./AssemblyParts";

extend({ AmbientLight, BoxGeometry, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial });

type AssemblyCanvasProps = { onReady: () => void; onUnavailable: () => void };

const AssemblyCanvas = ({ onReady, onUnavailable }: AssemblyCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const root = createRoot(canvas);
    let active = true;
    let state: RootState | undefined;
    const tokens = getComputedStyle(document.documentElement);
    const color = (name: string) => tokens.getPropertyValue(name).trim();
    const colors = { interface: color("--site-link"), api: color("--site-accent"), data: color("--site-muted"), connector: color("--site-border") };
    const size = () => ({ width: canvas.clientWidth, height: canvas.clientHeight, top: 0, left: 0 });
    const observer = new ResizeObserver(() => {
      const next = size();
      state?.setSize(next.width, next.height);
    });
    observer.observe(canvas);

    // Catch asynchronous renderer setup too; a React boundary alone cannot do that.
    void root.configure({
      frameloop: "demand", dpr: [1, 1.25], size: size(),
      camera: { position: [4.5, 3.5, 7], fov: 35 },
      gl: { powerPreference: "low-power", antialias: true },
    }).then(() => {
      if (!active) { root.unmount(); return; }
      state = root.render(
        <ErrorBoundary fallback={null} onError={onUnavailable}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[3, 6, 5]} intensity={2} />
          <WebGLContextGuard onContextLost={onUnavailable} />
          <AssemblyParts colors={colors} onReady={onReady} onUnavailable={onUnavailable} />
        </ErrorBoundary>,
      ).getState();
    }).catch(() => {
      root.unmount();
      if (active) onUnavailable();
    });

    return () => { active = false; observer.disconnect(); root.unmount(); };
  }, [onReady, onUnavailable]);

  return (
    <div className="system-canvas" role="img" aria-label="3D assembly of interface, API and data modules">
      <canvas ref={canvasRef} aria-hidden="true" style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
};

export default AssemblyCanvas;
