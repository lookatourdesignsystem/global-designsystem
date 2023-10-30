const emotionPresetOptions = {};

const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
  undefined,
  emotionPresetOptions
);

module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
      // your other plugins
    ],
  },
  style: {
    postcss: {
      plugins: [
        // require('tailwindcss'),
        require("autoprefixer"),
      ],
    },
  },
};
