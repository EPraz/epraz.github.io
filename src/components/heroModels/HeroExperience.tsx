import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import HeroLights from "./HeroLights";
import OptimizedRoom from "./OptimizedRoom";
import Loader from "../Loader";
import WebGLContextGuard from "../webgl/WebGLContextGuard";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <WebGLContextGuard />
      <Suspense fallback={<Loader />}>
        <HeroLights />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={15}
          minDistance={15}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
        />

        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <OptimizedRoom />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
