import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import css from "rollup-plugin-css-only";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [css({ output: "dist/bundle.css" })],
    },
  },
});
