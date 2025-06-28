const { faker } = require("@faker-js/faker");
let fakeEmail = faker.internet.email();
let fakeName = faker.person.fullName();
let fakePhone = faker.phone.number();
let fakeAddress = faker.location.streetAddress();
let fakeCity = faker.location.city();
let fakeZipCode = faker.location.zipCode();
let fakePassword = faker.internet.password();

describe("Faker Data Usage in Cypress", () => {
  it("Use Fake Data in Form", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(fakeEmail);
    cy.get('[data-qa="login-password"]').type(fakePassword);
    cy.get('[data-qa="login-button"]').click();
  });
});
