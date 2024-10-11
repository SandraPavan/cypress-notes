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