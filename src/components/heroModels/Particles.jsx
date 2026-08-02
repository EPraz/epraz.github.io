import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const { particles, positions } = useMemo(() => {
    const temp = [];
    const positionBuffer = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * 10,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 10,
      ];

      temp.push({
        position,
        speed: 0.005 + Math.random() * 0.001,
      });
      positionBuffer[i * 3] = position[0];
      positionBuffer[i * 3 + 1] = position[1];
      positionBuffer[i * 3 + 2] = position[2];
    }

    return { particles: temp, positions: positionBuffer };
  }, [count]);

  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
