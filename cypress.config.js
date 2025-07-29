const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');


module.exports = defineConfig({
  projectId: "9j1wfx",
  viewportHeight: 1200,
  viewportWidth: 1500,
  reporter:'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { removeDirectory })
      require('cypress-mochawesome-reporter/plugin')(on)
      
    
  },
  env: {
    hideXhr: true,
    amazon: 'https://www.amazon.com',
    shopist: 'https://shopist.io',
    google: 'https://www.google.com',
  },
  specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  baseUrl: "https://example.cypress.io/",
  experimentalWebKitSupport: true,
  experimentalRunAllSpecs: true,
  watchForFileChanges: true,
  experimentalStudio: true,
},
});
