const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '93vh5k',
  e2e: {
    watchForFileChanges: false,
    //reporter:'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) 
    {
      /*module.exports = (on, config) => {
        require('cypress-mochawesome-reporter/plugin')(on);
      };*/
    },
  },
});
