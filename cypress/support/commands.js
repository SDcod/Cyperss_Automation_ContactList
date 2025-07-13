//input fields with empty string support

Cypress.Commands.add("inputField", (selector, value) => {
  if (value) {
    return selector.should("be.visible").type(value);
  } else {
    return "empty field value";
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

//command to delete contacts

Cypress.Commands.add("deleteContact", (id) => {
  cy.getCookie("token", { timeout: 12000 })
    .should("exist")
    .then((token) => {
      cy.log(`bearer token ${token.value}`);

      cy.request({
        method: "DELETE",
        url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }).then((res) => {
        expect(res.status).equal(200);
      });
    });
});

//command to logout from the application

Cypress.Commands.add("Logout", () => {
  cy.get("#logout").click();
  cy.get("#signup", { timeout: 10000 }).should("be.visible");
});
