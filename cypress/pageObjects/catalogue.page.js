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
        return cy.get('[class="grid w-3/4 grid-cols-3 items-start gap-6 svelte-1srtmx6"]');
    }
    static get getAllCategories(){
        return cy.get('[class="mt-4 svelte-1pssnd9"]');
    }
    static get getProductTitle(){
        return cy.get('[class="poppins-extrabold relative z-10 text-3xl"]');
    }
    static get getProductPrice(){
        return cy.get('[class="mb-5 flex gap-10"]');
    }
    static get getBackBtn(){
        return cy.get('[class="flex gap-3"]');
    }
    static get getAddBtn(){
        return cy.get('[class="poppins-bold rounded-full bg-black p-2 px-4 text-xl text-white hover:cursor-pointer hover:bg-gray-800 active:bg-gray-700"]').contains('Add to cart');
    }
    static get getCartBtn(){
        return cy.get('[alt="cart"]');
    }
}