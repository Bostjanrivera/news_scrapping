Cypress.Commands.add('seeCategory', (category) => {
  cy.get('nav > ul')
  cy.contains(category).click().wait(3000)
  cy.contains('category:')
})

Cypress.Commands.add('seeIndividualNews', () => {
  cy.get('nav > ul')
  cy.get('div > a:first').click().wait(2000)
  cy.get('div > p')
  cy.get('div > h4')
})