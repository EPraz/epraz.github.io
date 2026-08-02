import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroLights from "./heroModels/HeroLights";
import Loader from "./Loader";
import { useMediaQuery } from "react-responsive";
import WebGLContextGuard from "./webgl/WebGLContextGuard";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor={"black"} />
      <ambientLight intensity={0.5} color="#ffffff" />

      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={0.5}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      className="pointer-events-none"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: false,
        powerPreference: "low-power",
        antialias: true,
      }}
      style={{ touchAction: "pan-y" }}
    >
      <WebGLContextGuard />
      <Suspense fallback={<Loader />}>
        <HeroLights />

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group scale={isMobile ? 0.45 : isTablet ? 0.65 : 1}>
          <Computers />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
