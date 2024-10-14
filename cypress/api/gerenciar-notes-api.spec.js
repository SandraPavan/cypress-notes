describe('Testes de API - CRUD de Notes', () => {
  beforeEach(() => {
    cy.loginAPI();    
  });
    it('Deve consultar as notes de um usuario', () => {    
      const authToken = Cypress.env('AUTH_TOKEN');
      cy.request({
        method: 'GET',
        url: '/api/notes',
        headers: {
          'X-Auth-Token': authToken
        }
      }).then((response) => {
        expect(response.status).to.equal(200);  
      });
    });
    it('Deve incluir uma note', () => {
      cy.createNotesApi()
      cy.deleteNotesApi()
    });
    it('Deve editar uma note', () => {
      cy.createNotesApi()
      const authToken = Cypress.env('AUTH_TOKEN');
      const id = Cypress.env('ID');
      cy.request({
        method: 'PUT',
        url: `/api/notes/${id}`,
        headers: {
          'X-Auth-Token': authToken
        },
        body: {
          title: 'Criar um cenario para segundo usuario editando',
          description: 'Adicionar um notes para segundo usuario',
          category: 'Home',
          completed: false
        },        
      }).then((response) => {
        expect(response.status).to.equal(200); 
        expect(response.body.data).to.have.property('title', 'Criar um cenario para segundo usuario editando');
      });
      cy.deleteNotesApi()
    });
    it('Deve excluir uma note', () => {
      cy.createNotesApi()
      cy.deleteNotesApi()
    });
})