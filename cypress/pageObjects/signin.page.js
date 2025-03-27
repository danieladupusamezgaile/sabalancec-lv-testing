import { BasePage } from "./base.page";

export class SigninPage extends BasePage {
    static get url() {
        return "";
    }
    static get getSigninTab(){
        return cy.get('[class="w-full rounded-r-xl bg-[#42531C] p-[16px] text-white opacity-25"]').contains('Log in');
    }
    static get getLoginBtn(){
        return cy.get('[class="poppins-bold mt-8 w-full rounded-xl bg-[#42531C] p-2 text-white"]').contains('Log in');
    }
    static get getEmailInput(){
        return cy.get('#email');
    }
    static get getPasswordInput(){
        return cy.get('#password');
    }
    static get getErr(){
        return cy.get('[class="rounded border border-red-600 bg-red-100 p-2 text-sm text-red-600"]').contains('Invalid credentials.');
    }
}