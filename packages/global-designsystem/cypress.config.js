const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bi7up6",
  component: {
    specPattern: "src/**/*.cy.{js,ts,jsx,tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
