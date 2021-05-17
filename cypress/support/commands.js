const ANIMATION_WAITING_TIME = 3000
Cypress.Commands.add('seeCategory', (category) => {
  cy.get('nav > ul')
  cy.contains(category).click().wait(ANIMATION_WAITING_TIME)
  cy.contains('category:')
})

Cypress.Commands.add('seeIndividualNews', () => {
  cy.get('nav > ul')
  cy.get('div > a:first').click().wait(ANIMATION_WAITING_TIME)
  cy.get('div > p')
  cy.get('div > h4')
})
Cypress.Commands.add('OpenCategoryAndSeeNews', (category) => {
  cy.seeCategory(category)
  cy.seeIndividualNews()
})