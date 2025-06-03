describe("Before After Use", () => {
  before(() => {
    cy.log("Before kullanımı cypress test");
    cy.visit("https://www.automationexercise.com/");
  });

  after(() => {
    cy.log("After use for example");
  });
  it("Basligi Dogrula", () => {
    cy.title().should("eq", "Automation Exercise");
  });
});

//testten önce çalıştırılması gereken şeyler before
//after test bittikten sonra yapılması gerekenleri after kullanılır
