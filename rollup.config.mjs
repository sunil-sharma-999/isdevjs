// rollup.config.mjs
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [json()],
};
