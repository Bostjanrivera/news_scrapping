describe('news_app', () => {
  beforeEach(() => {
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
  })

  it('Page can open the categories and open idividual news',  () => {
    cy.seeCategory('Fisica')
    cy.seeIndividualNews()
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
    cy.seeCategory('Astronomia')
    cy.seeIndividualNews()
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
    cy.seeCategory('Neurociencia')
    cy.seeIndividualNews()
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
    cy.seeCategory('Antropologia')
    cy.seeIndividualNews()
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
  })
})