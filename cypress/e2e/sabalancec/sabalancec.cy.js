const { HomePage } = require("../../pageObjects/home.page");
const { SignupPage } = require("../../pageObjects/signup.page");
const { SigninPage } = require("../../pageObjects/signin.page");
const { CataloguePage } = require("../../pageObjects/catalogue.page");

describe("Main page Module", () => {
    context("Main elements", () => {
        beforeEach(() => {
            HomePage.visit();
        });
        it("Navigation bar should have main section buttons", () => {
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
        it("Footer should contain contact us and terms & conditions links", () => {
            // check if title is visible
            HomePage.getFooterTitle.should('be.visible');
            // check if contact us is visible
            HomePage.getContactUs.should('be.visible');
            // check if terms & conditions is visible
            HomePage.getTermsAndCond.should('be.visible');
        });
    });
});

describe('Authentication Module', () => {
    context('Sign up Functionality', () => {
        beforeEach(() => {
            SignupPage.visit();
        });
        it('should show errors with invalid inputs', () => {
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
        });
        it('should successfully sign up with valid inputs', () => {
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
    context('Sign in Functionality', () => {
        beforeEach(() => {
            SigninPage.visit();
        });
        it("Should show errors with invalid inputs", () => {
            // click sign up button
            HomePage.getSignupButton.click();
            // click sign in tab
            SigninPage.getSigninTab.click();
            // check log in with empty inputs
            SigninPage.getLoginBtn.click();
            SigninPage.getLoginBtn.should('be.visible');

            // input valid email - test@email.com
            SigninPage.getEmailInput.type('test@email.com');
            // input invalid password - 123
            SigninPage.getPasswordInput.type('123');
            // click log in btn
            SigninPage.getLoginBtn.click();
            // verify that error is shown
            SigninPage.getErr.should('be.visible');

            // input invalid email - test2@email.com
            SigninPage.getEmailInput.clear().type('test2@email.com');
            // input valid password - Test@password1
            SigninPage.getPasswordInput.clear().type('Test@password1');
            // click log in btn
            SigninPage.getLoginBtn.click();
            // verify that error is shown
            SigninPage.getErr.should('be.visible');

            it("Should successfully log in with valid inputs", () => {
                // input valid email - test@email.com
                SigninPage.getEmailInput.clear().type('test@email.com');
                // input valid password - Test@password1
                SigninPage.getPasswordInput.clear().type('Test@password1');
                // click log in btn
                SigninPage.getLoginBtn.click();
                // verify that account initials TN are visible
                HomePage.getAccInitials.should('be.visible');
            });
        });
    });
});

describe('Product sections Module', () => {
    context('Catalogue Functionality', () => {
        beforeEach(() => {
            CataloguePage.visit();
        });
        it.only("Categories should show products accordingly", () => {
            // go to catalogue page
            HomePage.getCatalogueButton.click();
            // click fruits, seeds, nuts category drop down
            CataloguePage.getDropDown.click();
            // check if fruits, seeds and nuts categories are visible
            CataloguePage.getDropDownList.contains('Fruits').should('be.visible');
            CataloguePage.getDropDownList.contains('Seeds').should('be.visible');
            CataloguePage.getDropDownList.contains('Nuts').should('be.visible');
            // click fruits category
            CataloguePage.getDropDownList.contains('Fruits').click();
            // check if banana is visible
            CataloguePage.getProductGrid.contains('Banana').should('be.visible');

            // click fruits, seeds, nuts category drop down
            CataloguePage.getDropDown.click();
            // click Seeds category
            CataloguePage.getDropDownList.contains('Seeds').click();
            // check if chia is visible
            CataloguePage.getProductGrid.contains('Chia').should('be.visible');

            // click fruits, seeds, nuts category drop down
            CataloguePage.getDropDown.click();
            // click Nuts category
            CataloguePage.getDropDownList.contains('Nuts').click();
            // check if chia is visible
            CataloguePage.getProductGrid.contains('Almonds').should('be.visible');

            // click Vegetables category
            CataloguePage.getAllCategories.contains('Vegetables').click();
            // check if carrots is visible
            CataloguePage.getProductGrid.contains('Carrots').should('be.visible');
        });
    });
});