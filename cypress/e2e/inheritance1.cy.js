/// <reference types="Cypress" />

class BasePage{
    static loadPage(){
        //cy.visit('https://codenboxautomationlab.com/')
        cy.visit(Cypress.env('baseUrl'))
    }

    static waitFor(number){
        cy.wait(number);

    }
}

class HomePage extends BasePage {
    static scrollToBottom(){
        cy.contains('Contact Us').scrollIntoView()
    }

    static scrollToUp(){
        cy.contains('Welcome').scrollIntoView()
    }
}

// let hm=new HomePage();
// hm.loadPage()
// hm.waitFor
// hm.scrollToBottom()

describe('scroll page Testing', function() {
    before(function() {
        //runs once before all the test case excutes
        //setup test date. seed or reset database
        HomePage.loadPage();

    })

    it('page should scroll down & up', function(){
        HomePage.loadPage();
        HomePage.scrollToBottom();

        //cy.wait(4000);
        HomePage.waitFor(4000);
        HomePage.scrollToUp();
    })
    it('home page load for 2nd time', function(){
        //HomePage.loadPage();
    })


})





