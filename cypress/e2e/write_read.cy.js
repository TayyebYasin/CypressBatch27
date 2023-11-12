/// <reference types="Cypress" />

describe('My write_read Test Suite', () => {
    
    it('write on a text file test', () => {
       //create a test file and write on it
       cy.writeFile('sampleFile.txt','Hello world\n') 
       cy.writeFile('sampleFile.txt','I love Cypress',{flag:'a+'})

       //create json file in fixutre folder and write on it
       cy.writeFile('cypress\\fixtures\\example.json', {
            userName:'David',
            email:'info@codenbox.com',
            password:123456
         
       })
      })
    
      it('test to read text file', () => {
        //read the same text file
        cy.readFile('sampleFile.txt').should('exist').and('contain', 'Hello')

        //read from json file. Just load the example file from fixture
        cy.fixture('example').then((profileinfo)=>{
            expect(profileinfo.userName).to.eq('David')
        })

      })

      it('login test', function(){
        cy.visit('https://login.salesforce.com/')
        
        cy.fixture('example').then((profil)=>{
            cy.get('#username').type(profil.email)
            cy.get('#password').type(profil.password)

            
        })    //expect(profileinfo.userName).to.eq('David')

      })







})