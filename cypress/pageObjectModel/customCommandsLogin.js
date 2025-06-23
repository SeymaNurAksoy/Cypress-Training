class CustomCommandsLogin {

    get usernameField() {
        return cy.get('[data-qa="login-email"]');
    }
    get passwordField() {
        return cy.get('[data-qa="login-password"]');
    }

    get loginButton() {
        return cy.get('[data-qa="login-button"]');
    }
}
export default new CustomCommandsLogin();