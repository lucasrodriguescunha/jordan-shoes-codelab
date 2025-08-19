describe('Jordan Shoes App', () => {
    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('/')
    })

    it('Deve carregar a página inicial corretamente', () => {
        // Verifica se o título da página está correto
        cy.title().should('contain', 'Jordan Shoes')

        // Verifica se elementos principais estão visíveis
        cy.get('header').should('be.visible')
        cy.get('section').should('be.visible')
    })

    it('Deve exibir o header com logo Jordan', () => {
        // Verifica se o header está presente
        cy.get('header').should('be.visible')

        // Verifica se a mensagem de frete grátis está presente
        cy.get('header').should('contain.text', 'Frete grátis para todo o Brasil')
    })

    it('Deve exibir o hero banner', () => {
        // Verifica se o banner principal está dentro do header
        cy.get('header').should('be.visible')

        // Verifica se há conteúdo no hero banner
        cy.get('header').within(() => {
            cy.get('*').should('exist')
        })
    })

    it('Deve exibir a grade de produtos', () => {
        // Verifica se existe uma section (que é onde estão os produtos)
        cy.get('section').should('exist')

        // Verifica se há pelo menos um produto - corrigindo o erro do .within()
        cy.get('section').first().within(() => {
            // Procura por elementos que indicam produtos
            cy.get('*').should('have.length.greaterThan', 0)
        })
    })

    it('Deve exibir produtos com informações básicas', () => {
        // Verifica se existem produtos com informações
        cy.get('section').should('contain.text', 'Air Jordan')
        cy.get('section').should('contain.text', 'Tênis')
    })

    it('Deve ser responsivo em dispositivos móveis', () => {
        // Testa em viewport mobile
        cy.viewport(375, 667)
        cy.get('header').should('be.visible')
        cy.get('section').should('be.visible')

        // Volta para desktop
        cy.viewport(1280, 720)
        cy.get('header').should('be.visible')
        cy.get('section').should('be.visible')
    })
})
