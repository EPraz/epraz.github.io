import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import WebGLContextGuard from "./webgl/WebGLContextGuard";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: false, powerPreference: "low-power" }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <WebGLContextGuard />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
