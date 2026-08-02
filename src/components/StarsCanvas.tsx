import { Points, PointMaterial, AdaptiveDpr } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useLowPowerMode } from "../hooks/useLowPowerMode";
import WebGLContextGuard from "./webgl/WebGLContextGuard";

const LOW_POWER_DPR: [number, number] = [1, 1.25];
const DEFAULT_DPR: [number, number] = [1, 2];

const Stars = ({ count }: { count: number }) => {
  const pointsRef = useRef<THREE.Points | null>(null);
  const positions = useMemo(
    () => inSphere(new Float32Array(count * 3), { radius: 3 }),
    [count],
  );

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x -= delta / 14;
    pointsRef.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={positions as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

type StarsCanvasProps = {
  isEnabled: boolean;
};
const StarsCanvas = ({ isEnabled }: StarsCanvasProps) => {
  const isLowPowerMode = useLowPowerMode();

  if (!isEnabled) return null;

  const count = isLowPowerMode ? 1200 : 3000;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 2.5] }}
        dpr={isLowPowerMode ? LOW_POWER_DPR : DEFAULT_DPR}
        gl={{
          powerPreference: isLowPowerMode ? "low-power" : "high-performance",
          antialias: !isLowPowerMode,
        }}
        frameloop="always"
      >
        <WebGLContextGuard />
        <AdaptiveDpr pixelated />
        <Suspense fallback={null}>
          <Stars count={count} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
