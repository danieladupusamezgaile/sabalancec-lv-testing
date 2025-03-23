const { HomePage } = require("../../pageObjects/home.page");

describe("Sabalancec", () => {
    context("Test", () => {
        beforeEach(() => {
            HomePage.visit();
        });
        it("Open home page", () => {
            cy.visit("https://sabalancec-lv.vercel.app/");
        });
    });
});