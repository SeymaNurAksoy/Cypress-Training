describe('Screenshot kullanimi', () => {
    it('Ekran Görüntüsü alalim', () => {
        cy.visit('www.google.com');
        cy.screenshot();
    });
});