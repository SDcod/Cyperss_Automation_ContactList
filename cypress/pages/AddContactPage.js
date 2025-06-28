class AddContactPage {
  elements = {
    addContactUrl:
      "https://thinking-tester-contact-list.herokuapp.com/addContact",
    pageHeading: () => cy.contains("h1", "Add Contact"),
    addContactForm: () => cy.get("form[id='add-contact']", { timeout: 6000 }),
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
    cy.url().should("eq", this.elements.addContactUrl);
    this.elements.addContactForm().should("be.visible");
    return this;
  }

  fillContactForm(scenarioType, dataObject) {
    let firstName = dataObject[scenarioType].firstName;
    let lastName = dataObject[scenarioType].lastName;
    let email = dataObject[scenarioType].email;
    let phone = dataObject[scenarioType].phone;
    let birthdate = dataObject[scenarioType].birthdate;
    let address1 = dataObject[scenarioType].address1;
    let address2 = dataObject[scenarioType].address1;
    let city = dataObject[scenarioType].city;
    let state = dataObject[scenarioType].state;
    let postalCode = dataObject[scenarioType].postalCode;
    let country = dataObject[scenarioType].country;

    if (firstName) {
      this.elements.firstNameInput().should("be.visible").type(firstName);
    }
    if (lastName) {
      this.elements.lastNameInput().should("be.visible").type(lastName);
    }
    if (email) {
      this.elements.emailInput().should("be.visible").type(email);
    }
    if (phone) {
      this.elements.phoneInput().should("be.visible").type(phone);
    }
    if (birthdate) {
      this.elements.birthdateInput().should("be.visible").type(birthdate);
    }
    if (address1) {
      this.elements.address1Input().should("be.visible").type(address1);
    }
    if (address2) {
      this.elements.address2Input().should("be.visible").type(address2);
    }
    if (city) {
      this.elements.cityInput().should("be.visible").type(city);
    }
    if (state) {
      this.elements.stateProvinceInput().should("be.visible").type(state);
    }
    if (postalCode) {
      this.elements.postalCodeInput().should("be.visible").type(postalCode);
    }
    if (country) {
      this.elements.countryInput().should("be.visible").type(country);
    }

    return this;
  }

  clickSubmit() {
    this.elements.submitBtn().click();
    return this;
  }
  clickCancel() {
    this.elements.cancelBtn().click();
    return this;
  }

  validateErrorMessage(expected) {
    this.elements.errorMsg().should("include.text", expected);
    return this;
  }
}

export default new AddContactPage();
