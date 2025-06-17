//input fields with empty string support

Cypress.Commands.add("inputField", (selector, value) => {
  if (value) {
    return selector.should("be.visible").type(value);
  } else {
    return selector.emailInput().should("be.visible");
  }
});
