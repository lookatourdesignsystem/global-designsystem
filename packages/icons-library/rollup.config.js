import packageJson from "./package.json";
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";

const { generateRollupConfig } = require("../../configs/rollup");

const commonConfig = generateRollupConfig(packageJson);

const config = {
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
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
  ],
};

export default config;
