import { BasePage } from "./base.page";

export class ContactusPage extends BasePage {
    static get url() {
        return "";
    }
    static get getContactInfo(){
        return cy.get('[class="z-30 relative md:mb-48"]');
    }
    
    static get getNameInput(){
        return cy.get('#firstname');
    }
    static get getSendBtn(){
        return cy.get('[class="bg-black cursor-pointer poppins-medium hover:bg-gray-800 text-white py-4 px-12 border border-black rounded-lg svelte-frn6bn"]');
    }
}