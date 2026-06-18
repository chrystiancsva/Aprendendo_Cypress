describe('template spec', () => {
  beforeEach(() => {
    cy.visitarTela()
  });
  it.only('enviar formulario', () => {
    cy.enviarFormulario()
  })
  it('Marca Cada Tipo de Atedimento', () => {
    cy.marcaCadaTipoDeAtedimento()
  })
 
  it.only('Abrir Link Externo', () => {
    cy.abrirLinkExterno()
  })
})