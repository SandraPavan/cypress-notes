ddescribe('Testes de login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.login(); 
    cy.get('[data-testid="logout"]').click()
  });
});