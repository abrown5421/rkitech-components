import { defineConfig } from "tsup";
import stylePlugin from "esbuild-style-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [stylePlugin()],
});
