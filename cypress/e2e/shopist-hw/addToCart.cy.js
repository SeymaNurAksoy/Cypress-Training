describe('Add To Cart', () => {
    it('Add to Cart', () => {
        cy.visit('https://www.shopist.io/');
        cy.get('.departments > [href="/department/sofas"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.go(-1); // Tarayıcı geri git
        cy.get(':nth-child(2) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
         cy.go(-1); // Tarayıcı geri git
        cy.get(':nth-child(3) > :nth-child(1) > a > .product-card > img').click();
        cy.get('.purchase-button').click();
        cy.get('.cart > .menu-item-large-container > .menu-item-large').click();
        const urunler = [];

        cy.get('.product-description').each(($desc) => {
            const name = Cypress.$($desc).find('div:first').clone().children().remove().end().text().trim();
            const price = Cypress.$($desc).find('.price').text().trim();

            urunler.push({ name, price });
        }).then(() => {
            cy.writeFile('cypress/fixtures/urunler.json', urunler);
        });
    });
});
