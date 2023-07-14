class ActionPage {
  elements = {
    visitPage: () => cy.visit('https://example.cypress.io/commands/actions'),
    emailInput: () => cy.get('.action-email'),
    disabledTextArea: () => cy.get('.action-disabled'),
    passwordInput: () => cy.get('.action-focus'),
    fullnameInput: () => cy.get('.action-blur'),
    describeArea: () => cy.get('.action-clear'),
    couponCodeInput: () => cy.get('.action-form'),
  };

  visitActionPage() {
    this.elements.visitPage();
  }
  fillInUserEmail(userEmaill) {
    this.elements
      .emailInput()
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type(userEmaill, { delay: 100 })
      .should('have.value', userEmaill);

    this.elements
      .describeArea()
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking');
  }

  fillPassword(password) {
    this.elements
      .passwordInput()
      .focus()
      .should('have.class', 'focus')
      .prev()
      .should('have.attr', 'style', 'color: orange;')
      .type(password);
  }

  submitCoupon(couponNumber) {
    this.elements.couponCodeInput().find('[type="text"]').type(couponNumber);
    this.elements
      .couponCodeInput()
      .submit()
      .next()
      .should('contain', 'Your form has been submitted!');
  }
}

export const actionPage = new ActionPage();
