const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-preset-craco",
    "storybook-dark-mode",
  ],
  webpackFinal: async (config) => {
    // add tailwind
    config.module.rules.push(
      {
        test: /\,css&/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                // require("tailwindcss"),
                require("autoprefixer"),
              ],
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      }
    );

    return merge(config, {
      resolve: {
        alias: {
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          "emotion-theming": getPackageDir("@emotion/react"),
        },
      },
    });
  },
  features: {
    buildStoriesJson: true,
  },
};
