describe('Write File', () => {
    it('Write File', () => {
        cy.writeFile('cypress/fixtures/testFile.txt', 'Hello, Cypress! \n');
        cy.writeFile('cypress/fixtures/testFile.txt', 'Hello, JSON!' , { flag: 'a+' });
    });
});

describe('Read File', () => {
    it('Read File', () => {
        cy.readFile('cypress/fixtures/testFile.txt').should('contain', 'Hello');
    });

    it('read File 2', () => {
        cy.readFile('cypress/fixtures/testFile.txt').then((text) => {
            expect(text).to.include('Hello');
            expect(text).to.include('Cypress');
            expect(text).to.include('JSON');
        });
    });
});