describe('Cypress Locator', () => {
    
    it('Html element locate etme', () => {
        cy.get('#user-name') // id locate etmek
        cy.get('.login-box') // class locate
        cy.get('input[name="user-name"]') //attribute locate etmek

        cy.get('input[placeholder]:contains("Username")')
        cy.get('input[placeholder]').contains("Username")

    });
});