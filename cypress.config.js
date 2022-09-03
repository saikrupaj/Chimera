const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '93vh5k',
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
