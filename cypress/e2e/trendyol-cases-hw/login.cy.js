describe('Login Cases', () => {

    it('loginWithValidCredentials ', () => {
        cy.loginTrendyol('abcd@gmail.com', '.qwqrqr!qrqrwq*');
    });

    it('loginWithInvalidCredentials', () => {
        cy.loginTrendyol('abcd', '.111!abcde12*');

    });
});


