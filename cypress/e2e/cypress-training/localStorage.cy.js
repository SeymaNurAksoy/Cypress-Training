describe('Local Storage Use', () => {
    it('Local Storage', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
            cy.log(localStorage.length);
            cy.log(window.localStorage.length);
            localStorage.setItem('testKey', 'testValue');
            cy.wait(2000).then(() => {
                localStorage.removeItem('testKey', 'testValue');

            });
            cy.wait(1500).then(() => {
                localStorage.clear();

            });
        });
    });



    it.only('Local Storage 2', () => {
        cy.visit('https://www.qrcode-monkey.com/').then(() => {
            cy.wait(5000);
            cy.clearLocalStorage();
        });
    });
});