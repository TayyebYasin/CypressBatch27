/// <reference types="Cypress" />
import PracticePage from "./pageObjects/practice"
import RegistrationPage from "./pageObjects/register"


describe('My test suite', function(){
    it('validate test cases for practice page', function(){
        PracticePage.loadHomePage();
        PracticePage.getTitle();
        PracticePage.getDropDownOption();
        PracticePage.clickonRegForm();

    })

    it('validate test cases for registration page', function(){
        RegistrationPage.loadRegPage();
        RegistrationPage.getFirstName("john");
        RegistrationPage.getLastName("heck");
        RegistrationPage.getEmail("john@test.com");
        RegistrationPage.selectDropdown();
        RegistrationPage.selectCheckbox();
        RegistrationPage.submitForm();

    })
})