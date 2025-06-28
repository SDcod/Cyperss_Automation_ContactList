const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Contact-List-App-Test-Report",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    env: {
      USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
      USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
      grepFilterSpecs: true,
    },

    baseUrl: "https://thinking-tester-contact-list.herokuapp.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: { runMode: 1, openMode: 0 },
    watchForFileChanges: false,
    video: true,
    videoCompression: 40,
  },
});
