describe('news_app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('frontpage can be opened',  () => {
    cy.contains('SC News')
  })
})