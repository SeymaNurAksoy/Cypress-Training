describe('Temek Komutlar', () => {
    it('Temel komutlar cy.visit kullanimi', () => {
        cy.visit("/")
        cy.visit("/commands") //base url tanımlandıysa
        cy.visit("https://example.cypress.io/") //base url tanimlanmadiysa
        cy.visit({
            url: "https://example.cypress.io/", // base url tanımlanmadıysa
            method: 'GET'
        })
    });
});


it('Temek Komutlar cy.title Kullanimi ', () => {
    cy.title().should('eq',"cypress.io")// title tam eşitlik olursa doğrular
    cy.title.should('include',"cypress")// title içerisinde cypress geçiyorsa dogrular
    cy.title.should('contain',"cypress")// title içerisinde cypress geçiyorsa dogrular   
});

it('Temel Komutlar cy.url ve cy.location Kullanimi', () => {
    cy.url().should('eq','https://example.cypress.io/"commands') // url tam esitlik olursa dogrular
    cy.url.should('include','/commands') // url içerisinde commands geçiyorsa doğrular

    cy.location('pathname').should('eq','/commands') // gidilen pathi doğrulamış oluyoruz
    cy.location('protocol').should('eq','https') // gidilen protokolu doğrular
    cy.location('hostname').should('eq','https://example.cypress.io/') // tam esitlikte dogrular
    cy.location('hostname').should('include','cypress.io') // cypress.io içerirse hostname dogrular

});

it('Temel Komutlar cy.get kullanimi', () => {
    cy.get('#button') // dogru kullanımı
    cy.get('#button').as('deneme') //cy.get('@deneme')
    cy.get('a[href="example.cypress.io"]')
    cy.get('.dropdown-menu-list')
    cy.get('div.button')
    cy.get('ul li:first')
});

it('Temel komutlar cy.log kullanimi', () => {
    cy.log("log metni")
});

//describe.skip --> bu bloğu okumaz geçer
//describe.only--> sadece bu blogu okur