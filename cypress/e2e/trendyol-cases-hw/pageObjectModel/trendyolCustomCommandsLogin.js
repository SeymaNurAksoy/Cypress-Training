class TrendyolCustomCommandsLogin {
    get visitLoginPage() {
        cy.visit('https://www.trendyol.com/giris');
        return this;
    }
    get emailField() {
        return cy.get('[data-testid="email-input"]');
    }
    get passwordField() {
        return cy.get('[data-testid="password-input"]');    
    }
    get loginButton() {
        return cy.get('.q-primary');
    }
    get logout() {
        cy.get('[data-testid="user-menu"]').click();
        cy.get('[data-testid="logout-button"]').click();
    }

    get verifyLoginError() {
        cy.get('.error-message').should('be.visible');  
    }

    get verifyLoginSuccess() {
        return cy.get('[data-testid="user-menu"]').should('be.visible');
    }
}
export default new TrendyolCustomCommandsLogin;