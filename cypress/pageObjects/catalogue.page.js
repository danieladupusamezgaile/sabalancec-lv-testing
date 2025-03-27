import { BasePage } from "./base.page";

export class CataloguePage extends BasePage {
    static get url() {
        return "";
    }
    static get getDropDown(){
        return cy.get('[class="svelte-1srtmx6"]');
    }
    static get getDropDownList(){
        return cy.get('[class="subcategory-list ml-4 svelte-1srtmx6"]');
    }
    static get getProductGrid(){
        return cy.get('[class="grid grid-cols-3 gap-6 w-3/4 items-start svelte-1pssnd9"]');
    }
    static get getAllCategories(){
        return cy.get('[class="mt-4 svelte-1pssnd9"]');
    }
}