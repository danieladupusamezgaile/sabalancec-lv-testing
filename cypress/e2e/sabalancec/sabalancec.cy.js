const { HomePage } = require("../../pageObjects/home.page");

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
    });
});