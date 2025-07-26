describe('403 Hata Çozumu', () => {
    it('403 solve', () => {
        cy.visit('https://www.airbnb.de/',{
            headers: {
                'Accept-Language': 'en-US,en;q=0.9',
                'User-Agent': 'axios/0.21.1'
            }
        });
    });
});