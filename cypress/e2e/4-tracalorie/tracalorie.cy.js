describe('tracalorie', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com/tracalorie/?')
    })

    it('TC-01', () => {
        cy.get('#item-name').type('Egg')
        cy.get('#item-calories').type('25')
        cy.get('.add-btn').click()
        cy.get('#item-name').type('shushi')
        cy.get('#item-calories').type('75')
        cy.get('.add-btn').click()
    })
    

})
