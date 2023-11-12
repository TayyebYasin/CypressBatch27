/// <reference types="Cypress">

describe('login function scenario', () => {

  it('visit to the application', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //create cssSelector for Openwindow button & click

    cy.get('#openwindow').click();  //#value of id
    
    //cy.get('.btn-style class1').click();  //.value of Classname // giving error as class1 using too many times
    //cy.get('input[value="radio2"]').check();
    
    })

})