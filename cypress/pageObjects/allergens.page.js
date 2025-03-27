import { BasePage } from "./base.page";

export class AllergensPage extends BasePage {
    static get url() {
        return "";
    }
    static get getFishAllergen(){
        return cy.get('[class="text-xl poppins-medium"]').contains('Fish');
    }
    static get getFishTitle(){
        return cy.get('[class="font-bold my-8 poppins-black text-3xl z-20 ms-12 sm:ms-0"]').contains('Fish');
    }
    static get getReactionsTitle(){
        return cy.get('[class="text-2xl poppins-semibold text-center sm:text-left w-full"]').contains('Allergic Reactions');
    }
    static get getBackBtn(){
        return cy.get('[class="w-full Breadcrumb flex"]').contains('Allergens');
    }
}