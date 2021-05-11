describe('news_app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })
  it('Page can open the categories and open idividual news',  () => {
    cy.seeCategory('Fisica')
    cy.seeIndividualNews()
    cy.visit('http://localhost:8080/')
    cy.seeCategory('Astronomia')
    cy.seeIndividualNews()
    cy.visit('http://localhost:8080/')
    cy.seeCategory('Neurociencia')
    cy.seeIndividualNews()
    cy.visit('http://localhost:8080/')
    cy.seeCategory('Antropologia')
    cy.seeIndividualNews()
    cy.visit('http://localhost:8080/')
  })
})