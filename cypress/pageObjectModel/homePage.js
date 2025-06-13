export class HomePage {
  navigate() {
    cy.visit('https://cypress.io')
    return this;
  }

  pricingBtn() {
     cy.get(':nth-child(5) > .nav-bar-link').click();
  }

  /*getHeader() {
    return cy.get('h1');
  }

  getLoginButton() {
    return cy.get('button').contains('Login');
  }

  getSignupButton() {
    return cy.get('button').contains('Sign Up');
  }

  getSearchInput() {
    return cy.get('input[type="search"]');
  }

  getFeaturedProducts() {
    return cy.get('.featured-products');
  }?*/
}