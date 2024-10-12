describe('Testes de gerenciamento de notes', () => {
    beforeEach(() => {
        cy.login(); 
      });
    afterEach(()=>{
        cy.get('[data-testid="logout"]').click()
    });
    it('Deve exibir uma lista vazia de notas', () => {
        cy.get('[data-testid="no-notes-message"]').should('be.visible');
    });
    it('Deve incluir uma nota', () => {
      cy.createNote('Criar os cenarios', 'Analisar os cenarios para automatizar')
      cy.deleteNote()
    });
    it('Deve editar uma nota', () => {
      cy.createNote('Criar os cenarios', 'Analisar os cenarios para automatizar')
      cy.get('[data-testid="note-edit"]').click()
      cy.get('[data-testid="note-description"]').type(' editando')
      cy.get('[data-testid="note-submit"]').click();
      cy.get('[data-testid="note-card-description"]').should('contain', 'Analisar os cenarios para automatizar editando')
      cy.deleteNote()
    })
    it('Deve excluir uma nota', () => {
      cy.createNote('Criar os cenarios', 'Analisar os cenarios para automatizar')
      cy.deleteNote()
      cy.get('[data-testid="no-notes-message"]').should('be.visible');
    });
    it('Deve exibir uma lista com notas', () => {
      cy.createNote('Criar os cenarios', 'Analisar os cenarios para automatizar')
      cy.get('[data-testid="progress-info"]').should('be.visible');
      cy.deleteNote()
    });
    it('Um usuarios não deve visualizar as notes de outro usuario', () => {
      const SegundoUsuarioEmail = Cypress.env('login_segundo_email');
      const SegundoUsuarioPassword = Cypress.env('login_segundo_password');

      cy.createNote('Criar os cenarios', 'Analisar os cenarios para automatizar')
      cy.get('[data-testid="logout"]').click()
      cy.wait(2000)
      cy.get('.btn-primary').click();
      cy.get('[data-testid="login-email"]').type(SegundoUsuarioEmail);
      cy.get('[data-testid="login-password"]').type(SegundoUsuarioPassword);
      cy.get('[data-testid="login-submit"]').click();
      cy.get('[data-testid="no-notes-message"]').should('be.visible');
      cy.get('[data-testid="logout"]').click()
      cy.login()
      cy.deleteNote()
    });
  });