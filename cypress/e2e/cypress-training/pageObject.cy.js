import { HomePage } from "../../pageObjectModel/homePage";
 import { HomePageSecond } from "../../pageObjectModel/homePageSecond";
const homePagePom = new HomePage();
const homePagePomSecond = new HomePageSecond();

describe('Page Object Use', () => {
    it('Page Object Use Example', () => {

        homePagePom.navigate()
        .pricingBtn();
    }
    
)});

describe.only('Page Object Model Second', () => {
    it('Page Object Second', () => {
        homePagePomSecond.navigate()
        homePagePomSecond.pricingBtn().should('be.visible').and('contain', 'Pricing').click();
    });
});