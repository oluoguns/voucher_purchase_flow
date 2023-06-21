const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a5t3pm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});