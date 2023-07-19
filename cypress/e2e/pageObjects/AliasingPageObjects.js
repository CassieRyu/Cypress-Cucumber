class AliasingPage {
  elements = {
    visitPage: () => cy.visit('https://example.cypress.io/commands/aliasing'),
    tableRows: () => cy.get('.as-table').find('tbody>tr'),
    commnetsBtn: () => cy.get('.network-btn'),
  };

  visitAliasingPage() {
    this.elements.visitPage();
  }
  firstRow() {
    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @

    this.elements
      .tableRows()
      .first()
      .find('td')
      .first()
      .find('button')
      .as('firstBtn');

    // when we reference the alias, we place an
    // @ in front of its name
    cy.get('@firstBtn').click();

    cy.get('@firstBtn')
      .should('have.class', 'btn-success')
      .and('contain', 'Changed');
  }
  requestComments(newComments) {
    // Alias the route to wait for its response
    // cy.intercept();
    cy.intercept('GET', 'comments/*').as('getComment');

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    this.elements.commnetsBtn().click();

    // https://on.cypress.io/wait
    // cy.wait('@getComment').its('status').should('eq', 200);
    cy.get('@getComment').then(console.log);
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
    cy.log('a new commment added: ' + newComments);
  }
}

export const aliasingPage = new AliasingPage();
