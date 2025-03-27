import { BasePage } from "./base.page";

export class SignupPage extends BasePage {
    static get url() {
        return "";
    }
    static get getNameInput(){
        return cy.get('#fullname');
    }
    static get getEmailInput(){
        return cy.get('#email');
    }
    static get getAddressInput(){
        return cy.get('#address');
    }
    static get getPasswordInput(){
        return cy.get('#password');
    }
    static get getSignupBtn(){
        return cy.get('[class="poppins-bold mt-8 w-full rounded-xl bg-[#42531C] p-2 text-white"]').contains('Sign up');
    }
}