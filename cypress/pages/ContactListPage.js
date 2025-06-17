class ContactListPage {
  elements = {
    logoutBtn: () => cy.get("#logout"),
    contactListUrl:
      "https://thinking-tester-contact-list.herokuapp.com/contactList",
  };

  clickLogout() {
    this.elements.logoutBtn().should("be.visible").click();
    return this;
  }

  validateLoggedIn() {
    cy.url().should("eq", this.elements.contactListUrl);
    cy.contains("h1", "Contact List");
    return this;
  }
}

export default new ContactListPage();
