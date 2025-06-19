//input fields with empty string support

Cypress.Commands.add("inputField", (selector, value) => {
  if (value) {
    return selector.should("be.visible").type(value);
  } else {
    return selector.emailInput().should("be.visible");
  }
});

//command to delete current logged in user

Cypress.Commands.add("deleteUser", () => {
  cy.getCookie("token", { timeout: 12000 })
    .should("exist")
    .then((token) => {
      cy.log(`bearer token ${token.value}`);

      cy.request({
        method: "DELETE",
        url: "https://thinking-tester-contact-list.herokuapp.com/users/me",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then((res) => {
        expect(res.status).equal(200);
      });
    });
});
