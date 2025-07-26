describe('Cypress Studio', () => {
    it('Cypress Studio', () => {
        cy.visit('https://shopist.io')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chairs > .menu-item-large-container > .menu-item-large').click();
        cy.get(':nth-child(1) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.get('.description').click();
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click();
        cy.get('.checkout').click();
        /* ==== End Cypress Studio ==== */
    });
});