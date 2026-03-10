const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  env: {
    allure: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
  },
});