class EditContactPage {
  elements = {
    editPageUrl:
      "https://thinking-tester-contact-list.herokuapp.com/editContact",
    pageHeading: () => cy.contains("h1", "Edit Contact"),
    editContactForm: () => cy.get("form[id='edit-contact']", { timeout: 6000 }),
    firstNameInput: () => cy.get("#firstName"),
    lastNameInput: () => cy.get("#lastName"),
    emailInput: () => cy.get("#email"),
    birthdateInput: () => cy.get("#birthdate"),
    phoneInput: () => cy.get("#phone"),
    address1Input: () => cy.get("#street1"),
    address2Input: () => cy.get("#street2"),
    cityInput: () => cy.get("#city"),
    stateProvinceInput: () => cy.get("#stateProvince"),
    postalCodeInput: () => cy.get("#postalCode"),
    countryInput: () => cy.get("#country"),
    submitBtn: () => cy.get("#submit"),
    cancelBtn: () => cy.get("#cancel"),
    errorMsg: () => cy.get("#error"),
  };

  validateFormVisible() {
    cy.url().should("eq", this.elements.editPageUrl);
    this.elements.editContactForm().should("be.visible");
    return this;
  }

  editFirstName(originalValue, newValue) {
    if (newValue) {
      // Step 1: Get input, assert the value length
      this.elements.firstNameInput().should("have.value", originalValue);

      // Step 2: Clear and type new value (separate command)
      this.elements.firstNameInput().clear().type(newValue);
    }

    return this;
  }

  editLastName(newValue) {}

  saveEdit() {
    this.elements.submitBtn().click();
    return this;
  }
}

export default new EditContactPage();
