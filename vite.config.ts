import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { viteSingleFile } from "vite-plugin-singlefile";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
