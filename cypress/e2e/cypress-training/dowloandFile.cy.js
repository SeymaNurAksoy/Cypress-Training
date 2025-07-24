//https://www.npmjs.com/package/cypress-delete-downloads-folder
describe('Dowloand file Use', () => {
    before(() => {
        cy.deleteDownloadsFolder();
    });
    it('Download File', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Prevents Cypress from failing the test on uncaught exceptions  
        });
        cy.visit('https://demoqa.com/upload-download');
        cy.get('#downloadButton').click();
        cy.get('a.btn-primary').click();
    });
});