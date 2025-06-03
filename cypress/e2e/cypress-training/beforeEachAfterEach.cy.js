describe("Before After Use", () => {
  beforeEach(() => {
    cy.log("Before kullanimi cypress test"); //her it bloğu başlamadan önce çalışır
    cy.visit("https://www.automationexercise.com/");
  });

  afterEach(() => {
    // her it bloğu bittiğinde çalışır
    cy.log("After use for example");
  });
  it("Basligi Dogrula", () => {
    cy.title().should("eq", "Automation Exercise");
  });

  it("Url Dogrula", () => {
    cy.url().should("include", "automation");
  });

  it("Hostname  Dogrula", () => {
    cy.location("hostname").should("include", "automation");
  });

  
});
