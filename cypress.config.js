const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com/",
    watchForFileChanges: false,
  },

  env: {
    //this options runs only the specs that has mentioned tags, else it does not run the spec file.
    grepFilterSpecs: true,
  },
});
