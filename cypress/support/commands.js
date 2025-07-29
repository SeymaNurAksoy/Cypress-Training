// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import customCommandsLogin from '../pageObjectModel/customCommandsLogin';
import trendyolCustomCommandsLogin from '../e2e/trendyol-cases-hw/pageObjectModel/trendyolCustomCommandsLogin';
import 'cypress-file-upload';

require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('login', (email, password) => {
    customCommandsLogin.usernameField.type(email);
    customCommandsLogin.passwordField.type(password);
    customCommandsLogin.loginButton.click();

});

Cypress.Commands.add('loginTrendyol', (email, password) => {
    trendyolCustomCommandsLogin.visitLoginPage;
    trendyolCustomCommandsLogin.emailField.type(email);
    trendyolCustomCommandsLogin.passwordField.type(password);
    trendyolCustomCommandsLogin.loginButton.click(); 
});
Cypress.Commands.add('loginWithSession', (username, password) => {
    cy.session([username, password], () => {
        // oturum açma işlemlerini burada yapıyoruz
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
        cy.get('.oxd-button').click();
        cy.wait(1000); // Gerekirse bekleme süresi ekleyebilirsiniz
        cy.get('.oxd-glass-button').should('be.visible')
    });


});