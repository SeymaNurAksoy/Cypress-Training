describe('Cypress Assertion', () => {
    it('Cypress Assertion Example', () => {
        cy.visit('https://shopist.io/')
        cy.title().should('eq','Shop.ist')
        cy.url().should('contain','shop')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('be.visible').and('contain','Shop')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('contain','Shop')
       // cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.text','Shop') --> tüm text olmadığı için hata alınır
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.text','Shop the look')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').should('have.length','1')
        cy.get(':nth-child(3) > .jumbotron-box > :nth-child(1)').its('length').and('eq',1)

        cy.get('#main section > a').should('have.attr','href','/department/chairs')



    });
});