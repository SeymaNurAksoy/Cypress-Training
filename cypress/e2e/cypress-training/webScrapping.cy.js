describe('web scrapping', () => {

    it('web scrapping', () => {
        cy.step('Visit Shopist');
        cy.visit('https://shopist.io/department/chairs');
        cy.step('Get Chairs Price')
        cy.get('.description').as('chairsPrice').its('length').should('eq', 9);

        const results = [];
        cy.step('Extract Prices');
        cy.get('@chairsPrice').each(($el, index) => {
            cy.log("Results: " + index + " - " + $el.text());
            results.push($el.text());
        }).then(() => {
            cy.writeFile('cypress/fixtures/chairsPrice.json', results);
        });
    });


});
