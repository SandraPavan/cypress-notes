Cypress.Commands.add('login', () => {
    const email = Cypress.env('login_email');
    const password = Cypress.env('login_password');
  
    cy.visit('');
    cy.get('.btn-primary').click();
    cy.get('[data-testid="login-email"]').type(email);
    cy.get('[data-testid="login-password"]').type(password);
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="home"]').should('be.visible');
  });

Cypress.Commands.add('createNote', (title, description) => {
    cy.get('[data-testid="add-new-note"]').click();
    cy.get('[data-testid="note-title"]').type(title);
    cy.get('[data-testid="note-description"]').type(description);
    cy.get('[data-testid="note-submit"]').click();
    cy.get('[data-testid="note-card-title"]').should('contain', title);
  });

  Cypress.Commands.add('deleteNote', () => {
    cy.get('[data-testid="note-delete"]').click();
    cy.get('[data-testid="note-delete-confirm"]').click();
  });