import 'cypress-if';  

/// <reference types= "cypress"/>


it('Login',function()
{   
    cy.visit('https://dev.payschoolscentral.com/')
    cy.get('#mat-input-0').type('testpsc@mailinator.com')
    cy.wait(5000)
    cy.get('#mat-input-1').type('Test@2022')
    //cy.wait(5000)
    cy.get('.full-width.ng-tns-c10-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > [mat-icon-button=""] > .ng-star-inserted > .eye-hidden').click()
    //cy.wait(5000)
    cy.get('[style="min-height:100vh"] > .ps-card-login > .main > form.ng-dirty > :nth-child(5) > :nth-child(1) > .btn').click()
    cy.wait(5000)
})

xit('Add Student',function()
{   
    cy.get('#YourStudents').click()
    cy.wait(5000)
    cy.get('.mat-button > .mat-button-wrapper > .fa').click()
    cy.wait(3000)
    cy.get('.col-md-8 > .btn').click()
    cy.wait(10000)
    cy.get('#mat-select-0 > div > div.mat-select-value').click()
    cy.wait(10000)
    cy.contains('California').click()
    
})

it('Add Meal to Cart',function()
{
    //cy.get('.mat-button > .mat-button-wrapper > .fa').click()
    cy.wait(3000)
    cy.get('.pc-modal').if().get('.dialog-close-icon').click()
    //cy.wait(10000)
    cy.get('div.ng-star-inserted > .table-responsive > .table > :nth-child(1) > tr.ng-star-inserted > :nth-child(3) > span > .fas').click()

})
