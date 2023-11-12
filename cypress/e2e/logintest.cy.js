/// <reference types="Cypress" />
describe('Login test scenario', () => {
    //import './commands'
    it.skip('Define invalid login function',() =>{
        cy.visit('https://codenboxautomationlab.com/wp-login.php')
        cy.login('noName','1234567')
        //cy.wait(4000)
        cy.get('#login_error').should('contain', 'Error')
    })
    
    it('Validate child tab',() => {
        cy.visit('https://the-internet.herokuapp.com/windows')
         //cy.get('#opentab').click()
        // cy.url().should('include','codenbox')
        //cy.get('.example > a').invoke('removeAttr', 'target').click()

        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.url().should('include','internet');
        //cy.wait(4000);

        //cy.get('#opentab').invoke('removeAttr', 'target').click()
        //cy.url().should('include','codenbox');
        cy.wait(4000);
        cy.go('back');
    })

})