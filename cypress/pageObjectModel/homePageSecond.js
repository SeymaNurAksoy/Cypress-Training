export class HomePageSecond {
  navigate() {
    cy.visit('https://cypress.io');
  }

  pricingBtn() {
     return cy.get(':nth-child(5) > .nav-bar-link');
  }

}
export default new HomePageSecond();