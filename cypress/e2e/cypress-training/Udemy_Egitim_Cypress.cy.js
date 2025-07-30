describe("Udemy Eğitim Cypress", () => {
  it("tests Udemy Eğitim Cypress", () => {
    cy.viewport(928, 680);
    cy.visit("https://shopist.io/");
    cy.get("section > a div:nth-of-type(3)").click();
    cy.location("href").should("eq", "https://shopist.io/department/chairs");
    cy.get("div.products > div:nth-of-type(1) img").click();
    cy.location("href").should("eq", "https://shopist.io/department/chairs/product/1");
    cy.get("div.purchase-button").click();
    cy.get("div.navbar-small > div").click();
    cy.get("a:nth-of-type(6) > div").click();
    cy.location("href").should("eq", "https://shopist.io/cart");
    cy.get("div.remove-button").click();
    cy.get("div.checkout").click();
    cy.get("div.navbar-small img").click();
    cy.location("href").should("eq", "chrome-extension://aapbdbdomjkkjkaonfhkkikfgjllcleb/offscreen.html");
  });
});
//# recorderSourceMap=BCBDBECGCIBJBKCMBNBOC
