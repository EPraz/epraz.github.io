import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

const isWebGLDependency = (moduleId: string) =>
  moduleId.includes("/three/") ||
  moduleId.includes("@react-three") ||
  moduleId.includes("/postprocessing/") ||
  moduleId.includes("/maath/");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(moduleId) {
          if (isWebGLDependency(moduleId)) {
            return "vendor-webgl";
          }
        },
      },
    },
  },
});
