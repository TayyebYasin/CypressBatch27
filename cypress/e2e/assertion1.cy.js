/// <reference types="Cypress" />

describe('login function scenario', () => {

  it('visit to the application', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //create cssSelector for Openwindow button & click

    cy.get('input[value="radio2"]').check().should('be.checked');
    //cy.get('div[id='search-2'] input[placeholder='Search...']').type("hello cypress"); 
    //The above one is Not working as values are in single quote

    cy.get('div[id="search-2"] input[placeholder="Search..."]').type("automation").should('have.value','automation');
    
    //Below on is not selecting and not giving error
    //cy.get('label[for="Automation"]').click();
    cy.get('#checkBoxOption1').check().should('be.checked');   // selecting the Option1
    
    //Now the below one will uncheck the Option1
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked'); // unselecting the Option1
    
    //Check multiple checkbox and do assertion
    //cy.get('#checkBoxOption2').check().should('be.checked');
    //cy.get('#checkBoxOption2').uncheck().should('not.be.checked');

    ////Check multiple checkbox using common attributes and do assertion
    cy.get('input[type="checkbox"]').check(['option1', 'option2','option3']);
    cy.get('input[type="checkbox"]').uncheck(['option1', 'option2','option3']);

    cy.get('input[type="checkbox"]').first().check();
    })

})