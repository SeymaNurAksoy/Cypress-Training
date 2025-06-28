describe("Fixture Use", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/login");
  });
  it("Fixture Login Valid", () => {
    cy.fixture("login").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.validUsername, data.validPassword);
    });
  });

  it("Fixture Login INValid", () => {
    cy.fixture("login").as("credentials");
    cy.get("@credentials").then((data) => {
      cy.login(data.invalidUsername, data.invalidPassword);
    });
  });
});
