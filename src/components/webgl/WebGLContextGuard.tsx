import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const WebGLContextGuard = ({ onContextLost }: { onContextLost?: () => void }) => {
  const canvas = useThree(({ gl }) => gl.domElement);

  useEffect(() => {
    const preventContextLoss: EventListener = (event) => {
      event.preventDefault();
      onContextLost?.();
    };

    canvas.addEventListener("webglcontextlost", preventContextLoss, {
      passive: false,
    });

    return () => {
      canvas.removeEventListener("webglcontextlost", preventContextLoss);
    };
  }, [canvas, onContextLost]);

  return null;
};

export default WebGLContextGuard;
