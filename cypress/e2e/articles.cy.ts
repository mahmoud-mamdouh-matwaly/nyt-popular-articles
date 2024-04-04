describe('ArticleList component', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('Check  Empty list is render ', () => {
    before(() => {
      cy.intercept('GET', '**/svc/mostpopular/v2/viewed/1.json*', (req) => {
        req.reply({
          delay: 10,
          statusCode: 200,
          body: {
            results: [],
          },
        })
      }).as('emptyArticles')
    })

    it('displays empty state while articles are fetched', () => {
      cy.get('[data-testid="loading"]').should('be.visible')
      cy.wait('@emptyArticles')
      cy.get('[data-testid="loading"]').should('not.exist')
      cy.get('[data-testid="emptyList"]').should('be.visible')
    })
  })
  describe('Check  Spinner is render ', () => {
    before(() => {
      cy.intercept('GET', '**/svc/mostpopular/v2/viewed/1.json*', (req) => {
        req.reply({ delay: 10, statusCode: 200, fixture: 'articles.json' })
      }).as('loadingArticles')
    })

    it('displays loading state while articles are fetched', () => {
      cy.get('[data-testid="loading"]').should('be.visible')
      cy.wait('@loadingArticles')
      cy.get('[data-testid="loading"]').should('not.exist')
      cy.get('[data-testid="list"]').should('be.visible')
    })
  })
  describe('Check Error is render', () => {
    before(() => {
      cy.intercept('GET', '**/svc/mostpopular/v2/viewed/1.json*', (req) => {
        req.reply({ delay: 10, statusCode: 500 })
      }).as('errorFetchArticles')
    })
    it('displays error message on fetch failure', () => {
      cy.get('[data-testid="loading"]').should('be.visible')
      cy.wait('@errorFetchArticles')
      cy.get('[data-testid="loading"]').should('not.exist')
      cy.get('[data-testid="error"]').should('be.visible')
    })
  })

  describe('Check List is render', () => {
    before(() => {
      cy.intercept('GET', '**/svc/mostpopular/v2/viewed/1.json*', (req) => {
        req.reply({ delay: 10, statusCode: 200, fixture: 'articles.json' })
      }).as('fetchArticles')
    })
    it('displays articles', () => {
      cy.get('[data-testid="loading"]').should('be.visible')
      cy.wait('@fetchArticles')
      cy.get('[data-testid="loading"]').should('not.exist')
      cy.get('[role="article"]').should('be.visible')
    })
    it('Check navigation on click and Check article details is render', () => {
      cy.get('[role="article"]')
        .first()
        .then(($card) => {
          const articleId = $card.attr('data-testid')
          cy.get('[role="article"]').first().find('button').click()
          cy.url().should('include', `/article/${articleId}`)
          cy.get('[data-testid="articleDetails"]').should('be.visible')
        })
    })
  })
})
