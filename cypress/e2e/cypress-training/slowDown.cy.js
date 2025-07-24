 import  {slowCypressDown} from 'cypress-slow-down';

const { faker } = require("@faker-js/faker");
let fakeEmail = faker.internet.email();
let fakeName = faker.person.firstName();
let fakePhone = faker.phone.number();
let fakeAddress = faker.location.streetAddress();
let fakeCity = faker.location.city();
let fakeZipCode = faker.location.zipCode();
let fakePassword = faker.internet.password();

slowCypressDown(false);
describe("Slow Down Usage in Cypress", () => {
  it("Use Slow Down", () => {
    cy.slowDown(3000); // 3 saniye yavaşlatma
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(fakeEmail);
    cy.get('[data-qa="login-password"]').type(fakePassword);
    cy.get('[data-qa="login-button"]').click();
    cy.slowDownEnd();
  });
   it("Slow Down in Form-2", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(fakeName);
    cy.get('[data-qa="login-password"]').type(fakePassword);
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"]')
      .invoke('prop', 'validationMessage')
      .should('eq', `Lütfen e-posta adresine bir "@" işareti ekleyin. "${fakeName}" adresinde "@" eksik.`);
  });
});