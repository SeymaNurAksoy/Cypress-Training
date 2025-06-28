describe("Alias, Then, Each , Wrap ", () => {
  it("Examples", () => {
    let itemLength;
    cy.visit("https://shopist.io/");
    cy.get(".navbar-section a").should("be.visible").as("NavBarMenus");
    cy.get(".navbar-section a").as("NavBarMenus");
    cy.get("@NavBarMenus")
      .then(($el) => {
        itemLength = $el.length;
      })
      .each(($el, index) => {
        cy.log("Navbar Menu : " + index + ": " + $el.text());
        cy.get("@NavBarMenus").should("be.visible");
        if($el.text().includes("Cart")) {
          cy.wrap($el).click();
        }
      });
  });
});
