describe("ViewPort Kullanimi", () => {
  it("viewport with numbers", () => {
    cy.viewport(1200, 1000);
    cy.visit("https://shopist.io/");

  });

    it("viewport with string", () => {
    cy.viewport('macbook-15');
    cy.visit("https://shopist.io/");
    
  });

  
    it("viewport with string", () => {
    cy.viewport('iphone-x');
    cy.visit("https://shopist.io/");
  });
  
});
