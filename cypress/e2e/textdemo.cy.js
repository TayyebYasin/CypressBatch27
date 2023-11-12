/// <reference types="Cypress" />
describe('Text function example', () => {
    
    it('get text using text method option1',() =>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        
        cy.get('.page-title').invoke('text').then((str1) =>{
            expect(str1).to.equal('Automation Practice')
        })
        

     
    })
    
    //Another way to call the text function
    it('get text using text method option2',() =>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        
        cy.get('.page-title').then(function(str2) {
            cy.log(str2.text())
            

        })
  
})


})