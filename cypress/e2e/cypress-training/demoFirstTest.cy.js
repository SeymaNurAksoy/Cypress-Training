describe('Cypress First Test Demo', () => {
    it('First Test', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('eq',"Automation Exercise")
        cy.url().should('eq',"https://www.automationexercise.com/")
    });

       it('Second Test', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.title().should('include',"Automation ")
        cy.url().should('include',"www.automationexercise.com")
    });
});