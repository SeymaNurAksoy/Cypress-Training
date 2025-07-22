
describe('Shoelace sl-button Shadow DOM test', () => {
    it('should verify and interact with sl-button', () => {
        // URL sadece bir kez ziyaret edilmeli
        cy.visit('https://shoelace.style/components/button');

        // Temel button testi
        cy.get('sl-button', { timeout: 10000 })
            .should('exist')
            .shadow()
            .find('button')
            .should('be.visible');

        // Primary outline button testi ve tıklama
        cy.get('sl-button[variant="primary"][outline]', { timeout: 10000 })
            .should('exist')
            .shadow()
            .find('button')
            .should('be.visible')
            .click();
    });

});
describe('Multiple Click Test on Shadow DOM', () => {
    it('should click the shadow button 10 times', () => {
        cy.visit('https://shoelace.style/components/button');
        Cypress._.times(1, (index) => {
            cy.get('sl-button[variant="primary"]')
                .shadow()
                .find('button.button--primary.button--outline')
                .click();
            cy.wait(1000); // 1 saniye bekle
        });


    });

});
describe('Shadow DOM Test', () => {
    it('should type text in nested shadow DOM input', () => {
        // 1. Sayfayı yükle
        cy.visit('https://selectorshub.com/xpath-practice-page/');

        cy.wait(2000);

        // 2. Shadow DOM'lar arasında geçiş yap
        cy.get('#userName', { timeout: 10000 })
            .shadow()
            .find('#app2')
            .should('exist')
            .shadow()
            .find('#pizza')
            .should('be.visible')
            .type('Testing Shadow DOM - long', { force: true })


    });
});
describe('Shadow DOM Test 2', () => {
    it('should type text in nested shadow DOM input', () => {
        // 1. Sayfayı yükle
        cy.visit('https://selectorshub.com/xpath-practice-page/');

        cy.wait(2000);
        cy.get('#pizza', { includeShadowDom: true })
            .type('Testing Shadow DOM - 22-07-25', { force: true })


    });
});