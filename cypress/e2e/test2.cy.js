/// <reference types="Cypress">

describe('login function scenario', () => {

  it('visit to the application', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //create cssSelector for Openwindow button & click

    cy.get('input[value="radio2"]').check();
    
    })

})