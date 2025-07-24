describe('Trigger Kullanimi', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Bu hatayı Cypress görmezden gelsin
        return false;
    });

    it('Mouseover Kullanimi', () => {
        cy.visit('https://www.kahvedunyasi.com/')
        cy.get(':nth-child(3) > a > .style_content_item_link__FxE1b').trigger('mouseover')
        cy.get('a:nth-child(1) div:nth-child(2) span:nth-child(1)').click()
    });
    it('Mouseover Kullanimi - 2', () => {
        cy.visit('https://www.amazon.de/')
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', { button: 0 }) //mouse'in sol tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', { button: 1 }) //mouse'in orta tiklamasi icin
        cy.get('span#nav-link-accountList-nav-line-1').trigger('mousedown', { button: 2 }) //mouse'in sag tiklamasi icin
        cy.get("div#nav-al-your-account a:nth-child(10) > span").click()
    });

});