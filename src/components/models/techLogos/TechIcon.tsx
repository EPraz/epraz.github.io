import { Environment, Float, useGLTF } from "@react-three/drei";
import type { TechStackIconProps } from "../../../contants";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import WebGLContextGuard from "../../webgl/WebGLContextGuard";

type Props = {
  model: TechStackIconProps;
};

const TechIcon = ({ model }: Props) => {
  const { scene: sourceScene } = useGLTF(model.modelPath);
  const whiteMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "white" }),
    [],
  );
  const scene = useMemo(() => {
    const sceneClone = sourceScene.clone(true);

    if (model.name === "Interactive Developer") {
      sceneClone.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Object_5") {
          child.material = whiteMaterial;
        }
      });
    }

    return sceneClone;
  }, [model.name, sourceScene, whiteMaterial]);

  useEffect(() => () => whiteMaterial.dispose(), [whiteMaterial]);

  return (
    <Canvas>
      <WebGLContextGuard />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
