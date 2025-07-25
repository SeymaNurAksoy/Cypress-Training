
describe('Session Kullanimi', () => {
    beforeEach(() => {
        const username = 'Admin';
        const password = 'admin123';
        cy.loginWithSession(username, password);
    });
        
    it('Siteye Git', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.get(':nth-child(2) > .oxd-input').type('Andres');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();

    });
});