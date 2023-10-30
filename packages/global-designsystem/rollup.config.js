import packageJson from "./package.json";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";

const { generateRollupConfig } = require("../../configs/rollup");

const commonConfig = generateRollupConfig(packageJson);

const config = {
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
    }),
    url(),
    image(),
    svgr({
      typescript: true,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    json(),
  ],
};

export default config;
