describe('Banco CRUD', () => {
  it('Consultar TODOS OS BANCOS', () => {
    cy.request('GET', '/banco').then(
      (response) => {
        console.log(response.body);
        expect(response).property('status').to.equal(200);
        expect(response.body.length).eq(9);
      }
    )
  })

  it.only('Consultar banco POR API', () => {
    cy.request({
      method: 'POST',
      url: '/banco',
      form: false,
      body: {
          codigo: 999,
          nome: "BANCO TESTE 999",
          tipo: "MULTIPLO"

      }
    }).then((response) => {
      expect(response).property('status').to.equal(200);
      expect(response.body).to.have.property('codigo', 999);
      expect(response.body).to.have.property('nome', 'BANCO TESTE 999');
    })
  })
})