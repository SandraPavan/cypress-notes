describe('Testes de Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.login(); 
    cy.get('[data-testid="logout"]').click()
  });
});