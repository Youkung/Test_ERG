// const testDataLogin = require("/Users/youkung_manbookairm2/Documents/Test_ERG/cypress/fixtures/login.json")
const testDataLogin = require("../../fixtures/login.json")

import loginPage from "../../support/page_object/loginPage"

describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('TC-01', () => {
        // cy.viewport(320, 480)
        // cy.get('#username').type('student')
        // cy.get('#password').type('Password123')
        // cy.get('#submit').click()
        cy.login(testDataLogin.username.positive , testDataLogin.password.positive)
        // cy.login('student', 'Password123')
        // cy.get('.post-title').should('have.text', 'Logged In Successfully')
        loginPage.verifyLoginSucessText()
        // cy.wait(1500)
        // cy.go('back')
        // cy.screenshot()
    })
    it('TC-02', () => {
        // cy.get('#username').type('incorrectUser')
        // cy.get('#password').type('Password123')
        // cy.login('incorrectUser', 'Password123')
        cy.login(testDataLogin.username.negative , testDataLogin.password.positive)
        loginPage.verifyLoginErrorUsername()
        // cy.get('#submit').click()
        cy.get('#error').should('have.text', 'Your username is invalid!')
    })
    it.only('TC-03', () => {
        // cy.get('#username').type('student')
        // cy.get('#password').type('incorrectPassword')
        // cy.login('student', 'incorrectPassword')
        cy.login(testDataLogin.username.positive , testDataLogin.password.negative)
        loginPage.verifyLoginErrorPassword('Your password is invalid!')
        // cy.get('#submit').click()
        // cy.get('#error').contains('Your password is invalid!')
        // cy.get('#error').should('have.text', 'Your password is invalid!')
    })
    

})

/*describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('TC-01', () => {
        // cy.viewport(320, 480)
        // cy.get('#username').type('student')
        // cy.get('#password').type('Password123')
        // cy.get('#submit').click()
        cy.login('student', 'Password123')
        cy.get('.post-title').should('have.text', 'Logged In Successfully')
        // cy.wait(1500)
        // cy.go('back')
        // cy.screenshot()
    })
    it('TC-02', () => {
        // cy.get('#username').type('incorrectUser')
        // cy.get('#password').type('Password123')
        cy.login('incorrectUser', 'Password123')
        // cy.get('#submit').click()
        cy.get('#error').should('have.text', 'Your username is invalid!')
    })
    it.only('TC-03', () => {
        // cy.get('#username').type('student')
        // cy.get('#password').type('incorrectPassword')
        cy.login('student', 'incorrectPassword')
        // cy.get('#submit').click()
        cy.get('#error').contains('Your password is invalid!')
        // cy.get('#error').should('have.text', 'Your password is invalid!')
    })
    

})*/