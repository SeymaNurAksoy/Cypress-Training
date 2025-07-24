describe('Cypress Test Isolation',{testIsolation:false}, () => {
    it('File Upload 1', () => {
        cy.visit('https://www.qrcode-monkey.com/');
        cy.get("[ng-class=\"{'active':editView==='logo'}\"] > .pane-header > .icon > .fa").click();
        cy.get('input[type=file]').attachFile('mercan.jpg')
            .and('not.be.disabled')
            .attachFile({ filePath: "image.jpg", subjectType: 'drag-n-drop' });

    });


    it('File Upload 2', () => {
       
        const fileName = 'mercan.jpg';
        cy.fixture(fileName)
        .then(Cypress.Blob.base64StringToBlob)
        .then((fileContent) => {
            cy.get('.logo-preview')
                .attachFile({
                    fileContent,
                    fileName,
                    mimeType: 'image/**'}, { subjectType: 'drag-n-drop' });
        }
        );
    });
});