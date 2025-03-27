import { BasePage } from "./base.page";

export class SigninPage extends BasePage {
    static get url() {
        return "";
    }
    static get getSigninTab(){
        return cy.get('[class="mb-8 flex w-full"]').contains('Log in');
    }
    static get getLoginBtn(){
        return cy.get('[class="poppins-bold mt-8 w-full rounded-xl bg-[#42531C] p-2 text-white hover:cursor-pointer hover:bg-[#5a6e2a] active:bg-[#2e3b14]"]').contains('Log in');
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
    static get getSignOutBtn(){
        return cy.get('[class="bg-red-600 opacity-60 py-2 px-4 rounded-lg text-white cursor-pointer"]').contains('Logout');
    }
}