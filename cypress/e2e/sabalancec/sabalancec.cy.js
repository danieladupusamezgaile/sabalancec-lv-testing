const { HomePage } = require("../../pageObjects/home.page");
const { SignupPage } = require("../../pageObjects/signup.page");

describe("Sabalancec", () => {
    context("Test", () => {
        beforeEach(() => {
            HomePage.visit();
        });
        it("Navigation", () => {
            // check if logo is visible
            HomePage.getLogo.should('be.visible');
            // check if name of website - sabalancec - is visible
            HomePage.getSiteTitle.should('be.visible');
            // check if nav has catalogue button
            HomePage.getCatalogueButton.should('be.visible');
            // check if nav has bestsellers button
            HomePage.getBestsellersButton.should('be.visible');
            // check if nav has allergens button
            HomePage.getAllergensButton.should('be.visible');
            // check if nav has contact button
            HomePage.getContactButton.should('be.visible');
            // check if nav has signup button
            HomePage.getSignupButton.should('be.visible');
        });
        it("Footer", () => {
            // check if title is visible
            HomePage.getFooterTitle.should('be.visible');
            // check if contact us is visible
            HomePage.getContactUs.should('be.visible');
            // check if terms & conditions is visible
            HomePage.getTermsAndCond.should('be.visible');
        });
        it.only("Sign Up", () => {
            // click sign up button
            HomePage.getSignupButton.click();
            // check signup with empty inputs
            SignupPage.getSignupBtn.click();

            // test invalid inputs
            // input name - test123
            SignupPage.getNameInput.type('test123');
            // input email - testemail
            SignupPage.getEmailInput.type('testemail');
            // input address - !@£
            SignupPage.getAddressInput.type('!@£');
            // input password - testpassword
            SignupPage.getPasswordInput.type('testpassword');
            // click signup button
            SignupPage.getSignupBtn.click();
            SignupPage.getSignupBtn.should('be.visible');

            // check valid inputs
            // input name - Test Name
            SignupPage.getNameInput.type('Test Name');
            // input email - test@email.com
            SignupPage.getEmailInput.type('test@email.com');
            // input address - Brīvības iela 18, Rīga, LV-1234
            SignupPage.getAddressInput.type('Brīvības iela 18, Rīga, LV-1234');
            // input password - Test@password1
            SignupPage.getPasswordInput.type('Test@password1');
            // click signup button
            SignupPage.getSignupBtn.click();
        });
    });
});