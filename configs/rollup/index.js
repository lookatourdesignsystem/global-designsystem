const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const ts = require("rollup-plugin-ts");
/**
 * 공통된 rollup config 설정을 반환합니다.
 * @param pkg package.json
 */
exports.generateRollupConfig = function generateRollupConfig(pkg) {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), ts({})],
  };

  return config;
};
