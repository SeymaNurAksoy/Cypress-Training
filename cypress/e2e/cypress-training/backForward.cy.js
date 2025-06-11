describe('Back Forward for cypress', () => {
    it('cypress.io sayfaina gidip tarayicida ileri geri komutlarini ogrenecegiz', () => {
        cy.visit('https://www.cypress.io');
        cy.get(':nth-child(5) > .nav-bar-link').click();
        cy.title().should('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing');
        cy.go(-1); // Tarayıcı geri git
        cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
        cy.go(1); // Tarayıcı ileri git
        cy.title().should('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing');
        cy.go(-1); // Tarayıcı geri git
        cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
        cy.go(1); // Tarayıcı ileri git
        cy.title().should('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing');
        
    });
});