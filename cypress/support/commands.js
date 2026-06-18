Cypress.Commands.add('visitarTela', () => {
    cy.visit('/src/index.html')
})

Cypress.Commands.add('enviarFormulario', () => {
    const texto = 'gostei da aula de altinha'
    cy.get('#firstName')
        .type('Ronaldo')
        .should('have.value','Ronaldo')
    cy.get('#lastName')
        .type('Fenomeno')
        .should('have.value','Fenomeno')
    cy.get('#email')
        .type('fenomenofofinho@hotmail.com')
        .should('have.value','fenomenofofinho@hotmail.com')
    cy.get('#phone')
        .type('27997696969')
        .should('have.value','27997696969')
        // cy.contains('select', 'Blog' )
        cy.get('#product')    
        .select('blog') 
        .should('have.value','blog')
        cy.contains('label', 'Elogio')
        .click()
    // cy.get('input[name="atendimento-tat"]')
    //     .check('elogio')
    //     .should('be.checked')
        // .uncheck('elogio') gostaria muito q funcionasse
        // .should('not.be.checked')
    cy.get('#email-checkbox')
        .check()
        .should('be.checked')
    cy.get('#phone-checkbox')
        .check()
        .should('be.checked')
    cy.get('#open-text-area')
        .type(texto, { delay: 0 })
        .should('have.value', texto)
    cy.get('#file-upload')
        .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
        // or
    //     cy.fixture('example.jon').as('sampleFile')
    // cy.get('#file-upload')
    //     .selectFile('@sampleFile')
    cy.get('.button')
        .click()
        .get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')

})

Cypress.Commands.add('marcaCadaTipoDeAtedimento', () => {
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')

    })
})

Cypress.Commands.add('abrirLinkExterno', () => {
    // cy.get('#privacy a').should('have.attr','target', '_blank').click()
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    // cy.visit('/src/privacy.html')
    // cy.contains('Talking About Testing').should('be.visible')
})
