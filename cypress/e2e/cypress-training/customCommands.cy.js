describe('Custom Commands', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login');
    });
    it('Custom Commands Login Valid', () => {
     cy.login('deneme123@gmail.com','12345');
    });

    it('Custom Commands Login INValid', () => {
     cy.login('deneme123','AAA');
    });
});