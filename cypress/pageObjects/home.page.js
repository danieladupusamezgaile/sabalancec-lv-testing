import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    static get url() {
        return "";
    }
    static get getLogo(){
        return cy.get('[src="/logo-1.png"]');
    }
    static get getSiteTitle(){
        return cy.get('a').contains('Sabalancec');
    }
    static get getCatalogueButton(){
        return cy.get('nav').contains('CATALOGUE');
    }
    static get getBestsellersButton(){
        return cy.get('nav').contains('BESTSELLERS');
    }
    static get getAllergensButton(){
        return cy.get('nav').contains('ALLERGENS');
    }
    static get getContactButton(){
        return cy.get('nav').contains('CONTACT');
    }
    static get getSignupButton(){
        return cy.get('nav').contains('SIGN UP');
    }
}