describe('Testes de Erros', () => {
    it('Não deve fazer login com sucesso', () => {
      cy.visit('');
      cy.get('.btn-primary').click();
      cy.get('[data-testid="login-email"]').type('teste@testes.com');
      cy.get('[data-testid="login-password"]').type('123456');
      cy.get('[data-testid="login-submit"]').click();
      cy.get('[data-testid="alert-message"]').should('be.visible');
    });
    it('Não deve incluir uma nota', () => {
        cy.login(); 
        cy.get('[data-testid="add-new-note"]').click();
        cy.get('[data-testid="note-submit"]').click();
        cy.get(':nth-child(3) > .invalid-feedback').should('be.visible');
        cy.get(':nth-child(4) > .invalid-feedback').should('be.visible');
      });
  });