/// <reference types="Cypress">

describe('login function scenario', () => {

  it('visit to the application', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //create cssSelector for Openwindow button & click

    cy.get('input[value="radio2"]').check();
    //cy.get('div[id='search-2'] input[placeholder='Search...']').type("hello cypress"); 
    //The above one is Not working as values are in single quote

    cy.get('div[id="search-2"] input[placeholder="Search..."]').type("hello cypress");
    
    //Below on is not selecting and not giving error
    //cy.get('label[for="Automation"]').click();


    
    })

})