/// <reference types= "cypress"/>

it('Add Meal to Cart',function()
{
    cy.get('body').then((body) => {
        if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
            cy.get('[data-jsl10n="wikivoyage.name"]').click()
        }
        else {
            cy.get('[data-jsl10n="wiktionary.name"]').click()
        }
    })
})
