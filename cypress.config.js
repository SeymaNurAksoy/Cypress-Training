const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');


module.exports = defineConfig({
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
  baseUrl: "https://example.cypress.io/"
},
});
