describe('XHR Test', () => {
    it('cy.request Kullanimi', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
            expect(response).to.have.property('headers');
            expect(response.headers).to.have.property('content-type');
            expect(response.headers['content-type']).to.include('application/json');
        })
    });

    it('cy.request Kullanimi 2', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'GET',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
            expect(response).to.have.property('headers');
            expect(response.headers).to.have.property('content-type');
            expect(response.headers['content-type']).to.include('application/json');
        })
    });

    it('cy.request Kullanimi 3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
it('cy.intercept + cy.request Kullanımı', () => {
  cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments').as('getComments');

  cy.request('https://jsonplaceholder.cypress.io/comments');

  cy.wait('@getComments', { timeout: 10000 })
    .its('response.statusCode')
    .should('eq', 200);
});

});