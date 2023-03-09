const url = 'http://localhost:3000';

describe('0b.is', function() {
  it('Front page loads correctly', function() {
    cy.visit(url);
    cy.contains('0b.is')
  })
})
