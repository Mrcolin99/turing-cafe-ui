describe('The main page', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/reservations'
    }, { fixture: 'res' })
    cy.visit('http://localhost:3000')
  })
  it('should see a page with a title, form, and reservation list', () => {
    cy.get('.app-title').contains('Turing Cafe')
    cy.get('.app-title')
    cy.get('.resy-container')
  })
it('should be able to enter info into the form', () => {
  cy.get('#name')
  .type('Colin')
  cy.get('#date')
  .type('02/21/23')
  cy.get('#time')
  .type('11:00')
})

it('should be able to make a new reservation', () => {
  cy.get('#name')
  .type('Colin')
  cy.get('#date')
  .type('02/21/23')
  cy.get('#time')
  .type('11:00')
  cy.get('button').click()
  cy.get(':nth-child(3) > .res')
  .contains('Colin 02/21/23 11:00')
})

})