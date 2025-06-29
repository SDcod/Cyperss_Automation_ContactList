// configs/api-test.config.js
const path = require("path");
const { defineConfig } = require("cypress");

require("dotenv").config({
  // ⬅️ load .env
  path: path.join(__dirname, "..", ".env"), // points back to root as our config file is not in root directory
});

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "API-Tests",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    env: {
      API_KEY: process.env.CYPRESS_API_KEY,
    },

    baseUrl: "https://gorest.co.in/",
    watchForFileChanges: false,
  },
});
