import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const WebGLContextGuard = () => {
  const canvas = useThree(({ gl }) => gl.domElement);

  useEffect(() => {
    const preventContextLoss: EventListener = (event) => {
      event.preventDefault();
    };

    canvas.addEventListener("webglcontextlost", preventContextLoss, {
      passive: false,
    });

    return () => {
      canvas.removeEventListener("webglcontextlost", preventContextLoss);
    };
  }, [canvas]);

  return null;
};

export default WebGLContextGuard;
