Cypress.Commands.add('login', () => {
    const email = Cypress.env('login_email');
    const password = Cypress.env('login_password');
  
    cy.visit('/app');
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

Cypress.Commands.add('loginAPI', () => {
  const email = Cypress.env('login_segundo_email');
  const password = Cypress.env('login_segundo_password');

  cy.request({
    method: 'POST',
    url: '/api/users/login',  
    body: {
      email: email,   
      password: password  
    }
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', true);
    expect(response.body.data).to.have.property('token');
    Cypress.env('AUTH_TOKEN', response.body.data.token);
  });

  Cypress.Commands.add('createNotesApi', () => {
    const authToken = Cypress.env('AUTH_TOKEN');
    cy.request({
      method: 'POST',
      url: '/api/notes',
      headers: {
        'X-Auth-Token': authToken
      },
      body: {
        title: 'Criar um cenario para segundo usuario',
        description: 'Adicionar um notes para segundo usuario',
        category: 'Home',
        completed: false
      }
    }).then((response) => {
      expect(response.status).to.equal(200); 
      expect(response.body.data).to.have.property('title', 'Criar um cenario para segundo usuario');
      expect(response.body.data).to.have.property('id');
      Cypress.env('ID', response.body.data.id);
    });
  });
  Cypress.Commands.add('deleteNotesApi', () => {
    const authToken = Cypress.env('AUTH_TOKEN');
    const id = Cypress.env('ID');
      cy.request({
        method: 'DELETE',
        url: `/api/notes/${id}`,
        headers: {
          'X-Auth-Token': authToken
        }        
      }).then((response) => {
        expect(response.status).to.equal(200); 
      });
  })
});