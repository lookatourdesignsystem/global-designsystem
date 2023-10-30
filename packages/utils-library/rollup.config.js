import packageJson from "./package.json";

const { generateRollupConfig } = require("../../configs/rollup");

const commonConfig = generateRollupConfig(packageJson);

const config = {
  ...commonConfig,
};

export default config;
