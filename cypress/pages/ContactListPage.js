class ContactListPage {
  elements = {
    logoutBtn: () => cy.get("#logout"),
    contactListUrl:
      "https://thinking-tester-contact-list.herokuapp.com/contactList",
    addContactBtn: () => cy.get("#add-contact"),
    listTable: () => cy.get("#myTable", { timeout: 8000 }),
    contactRecordName: "#myTable .contactTableBodyRow td:nth-child(2)",
    contactRecordEmail: "#myTable .contactTableBodyRow td:nth-child(4)",
  };

  clickLogout() {
    this.elements.logoutBtn().should("be.visible").click();
    return this;
  }

  validateLoggedIn() {
    cy.url().should("eq", this.elements.contactListUrl);
    cy.contains("h1", "Contact List", { timeout: 10000 });
    return this;
  }

  validateContactListPage() {
    cy.contains("h1", "Contact List");
    return this;
  }

  clickAddNewContact() {
    this.elements.addContactBtn().should("be.visible").click();
    return this;
  }

  validateListTableVisible() {
    this.elements.listTable().should("be.visible");
    return this;
  }
  openContactRecordUsingName(name) {
    cy.contains(this.elements.contactRecordName, name)
      .should("be.visible")
      .click();
    return this;
  }

  openContactRecordUsingEmail(email) {
    cy.contains(this.elements.contactRecordEmail, email)
      .should("be.visible")
      .click();
    return this;
  }
}

export default new ContactListPage();
