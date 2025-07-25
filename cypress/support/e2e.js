// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-slow-down/commands';
import 'cypress-plugin-xhr-toggle'
import 'cypress-plugin-steps';
import 'cypress-mochawesome-reporter/register';
const app = window.top;
if(!app.document.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request , .command-name-xhr {display: none}';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Failed to execute 'observe' on 'MutationObserver'")) {
    return false; // bu hatayı test başarısızlığına dönüştürme
  }
});