
describe('SC News app', () => {
  describe('when open each category', () => {
    beforeEach(() => {
    cy.visit('https://bostjanrivera.github.io/news_scrapping/')
    })
    it('can open a news in the home'), () => {
      cy.seeIndividualNews()
    }
    it(' can open the physics category',  () => {
      cy.OpenCategoryAndSeeNews('Fisica')
    })
    it(' can open the astronomy category ',  () => {
      cy.OpenCategoryAndSeeNews('Astronomia')
    })
    it(' can open the neuroscience category ',  () => {
      cy.OpenCategoryAndSeeNews('Neurociencia')
    })
    it(' can open the anthropology category ',  () => {
      cy.OpenCategoryAndSeeNews('Antropologia')
    })
  })
})