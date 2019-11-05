describe('Simulados Admin Frontend', function() {
    it('Visits application at localhost:4000', function() {
        cy.visit('http://localhost:4000')
    })
    it('Displays "Entrar na sua conta" message', function() {
        cy.contains('Entrar na sua conta')
    })
})

describe('Login process', function () {
    it('Allows typing username', function () {
        cy.get('.test-login-input')
        .type('admin@simulados.com')
        .should('have.value', 'admin@simulados.com')
    })
    it('Allows typing password', function () {
        cy.get('.test-password-input')
        .type('admin')
        .should('have.value', 'admin')
    })
    it('Completes login and displays "Lista de Questões"', function () {
        cy.get('.test-login-button').click()
        cy.contains('Lista de Questões')
    })
})
