describe('Enviroment', () => {
    it('Enviroment', () => {
        cy.visit(Cypress.env('shopist'));
    });
});