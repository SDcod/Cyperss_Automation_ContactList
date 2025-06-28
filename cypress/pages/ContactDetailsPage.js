class ContactDetailsPage {
  elements = {
    pageHeading: () => cy.contains("h1", "Contact Details"),
    editContact: () => cy.get("#edit-contact"),
    returnToList: () => cy.get("#return"),
    deleteContactBtn: () => cy.get("#delete"),
    errorMsg: () => cy.get("#error"),
  };

  validateDetailsPage() {
    this.elements.pageHeading();
    return this;
  }

  validateContactDetails(firstName, lastName) {
    cy.get("#firstName").should("have.text", firstName);
    cy.get("#lastName").should("have.text", lastName);
    return this;
  }

  confirmDeletePrompt(decision) {
    cy.window().then((win) => {
      if (decision == true) {
        cy.stub(win, "confirm").returns(true).as("confirmDelete");

        //perform confirm prompt trigger
        this.elements.deleteContactBtn().should("be.visible").click();

        cy.get("@confirmDelete").should(
          "have.been.calledOnceWith",
          "Are you sure you want to delete this contact?"
        );
      } else if (decision == false) {
        cy.stub(win, "confirm").returns(false).as("confirmDelete");

        //perform confirm prompt trigger
        this.elements.deleteContactBtn().should("be.visible").click();

        cy.get("@confirmDelete").should(
          "have.been.calledOnceWith",
          "Are you sure you want to delete this contact?"
        );
      } else {
        cy.log(
          "your passed invalid decision to the test function, valid input should be a boolean"
        );
      }
    });
    return this;
  }
}

export default new ContactDetailsPage();
