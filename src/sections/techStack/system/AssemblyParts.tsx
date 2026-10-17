import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type AssemblyPartsProps = {
  colors: { interface: string; api: string; data: string; connector: string };
  onReady: () => void;
  onUnavailable: () => void;
};

const positions = [-1.65, 0, 1.65];

const AssemblyParts = ({ colors, onReady, onUnavailable }: AssemblyPartsProps) => {
  const parts = useRef<Array<Group | null>>([]);
  const animation = useRef({ progress: 0, frames: 0, slowFrames: 0, ready: false, failed: false });

  useFrame((state, delta) => {
    const current = animation.current;
    if (current.failed) return;
    if (!current.ready) {
      current.ready = true;
      onReady();
    }
    current.frames += 1;
    if (delta > 0.04) current.slowFrames += 1;
    if (current.frames <= 30 && current.slowFrames >= 12) {
      current.failed = true;
      onUnavailable();
      return;
    }
    current.progress = Math.min(1, current.progress + Math.min(delta, 0.05) / 1.2);
    const remaining = Math.pow(1 - current.progress, 3);
    for (let index = 0; index < parts.current.length; index += 1) {
      const part = parts.current[index];
      if (!part) continue;
      part.position.set(positions[index] + (index - 1) * remaining * 1.8, remaining * (index + 1) * 0.4, 0);
      part.rotation.y = remaining * (index - 1) * 0.35;
    }
    if (current.progress < 1) state.invalidate();
  });

  return (
    <group rotation={[0, -0.2, 0]}>
      <group ref={(part) => { parts.current[0] = part; }} position={[-3.45, 0.4, 0]}>
        <mesh position={[0, 0.35, 0]}><boxGeometry args={[1.25, 0.9, 0.16]} /><meshStandardMaterial color={colors.interface} roughness={0.6} /></mesh>
        <mesh position={[0, -0.15, 0]}><boxGeometry args={[0.12, 0.35, 0.12]} /><meshStandardMaterial color={colors.interface} /></mesh>
        <mesh position={[0, -0.35, 0]}><boxGeometry args={[0.9, 0.12, 0.6]} /><meshStandardMaterial color={colors.interface} /></mesh>
      </group>
      <group ref={(part) => { parts.current[1] = part; }} position={[0, 0.8, 0]}>
        {[0, 0.4].map((height) => <mesh key={height} position={[0, height, 0]}><boxGeometry args={[1.1, 0.28, 0.85]} /><meshStandardMaterial color={colors.api} roughness={0.5} metalness={0.15} /></mesh>)}
      </group>
      <group ref={(part) => { parts.current[2] = part; }} position={[3.45, 1.2, 0]}>
        {[0, 0.23, 0.46].map((height) => <mesh key={height} position={[0, height, 0]}><cylinderGeometry args={[0.57, 0.57, 0.18, 24]} /><meshStandardMaterial color={colors.data} roughness={0.6} /></mesh>)}
      </group>
      {[-0.83, 0.83].map((x) => <mesh key={x} position={[x, -0.24, 0]}><boxGeometry args={[0.7, 0.06, 0.06]} /><meshStandardMaterial color={colors.connector} /></mesh>)}
    </group>
  );
};

export default AssemblyParts;
