describe('Login flow', () => {

  it('should login with valid credentials', () => {
    cy.visit('http://127.0.0.1:8000/users/login/')
    
    cy.get('input[name="username"]').type('cliente_demo')
    cy.get('input[name="password"]').type('Cliente1234')
    
    cy.get('button[type="submit"]').click()
    
    cy.url().should('not.include', 'login')
  })

})