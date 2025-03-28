import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    static get url() {
        return "";
    }
    static get getProdTitle(){
        return cy.get('[class="poppins-medium max-w-full truncate overflow-hidden text-lg text-ellipsis whitespace-nowrap sm:text-xl"]');
    }
    static get getContinueBtn(){
        return cy.get('p').contains('Continue');
    }
}