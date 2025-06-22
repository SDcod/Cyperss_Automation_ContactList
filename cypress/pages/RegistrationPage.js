class RegistrationPage {
  elements = {
    pageUrl: "https://thinking-tester-contact-list.herokuapp.com/addUser",
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    firstNameInput: () => cy.get("#firstName"),
    lastNameInput: () => cy.get("#lastName"),
    errorMessage: () => cy.get("#error"),
    submitBtn: () => cy.get("#submit"),
    cancelBtn: () => cy.get("#cancel"),
  };

  validateRegistrationPage() {
    cy.url().should("eq", this.elements.pageUrl);
    cy.contains("h1", "Add User");
    return this;
  }

  //custom command 'inputField' to handle input for empty string scenarios
  enterFirstName(firstName) {
    cy.inputField(this.elements.firstNameInput(), firstName);
    return this;
  }
  enterLastName(lastName) {
    cy.inputField(this.elements.lastNameInput(), lastName);
    return this;
  }
  enterEmail(email) {
    cy.inputField(this.elements.emailInput(), email);
    return this;
  }
  enterPassword(password) {
    cy.inputField(this.elements.passwordInput(), password);
    return this;
  }

  validateRegistrationError(expected) {
    this.elements.errorMessage().should("have.text", expected);
    return this;
  }

  //method for Data driven inputs to fill entire registration form
  fillRegistraionDetails(userType, dataObject) {
    let firstName = dataObject[userType].firstName;
    let lastName = dataObject[userType].lastName;
    let email = dataObject[userType].email;
    let password = dataObject[userType].password;

    if (firstName) {
      this.elements.firstNameInput().should("be.visible").type(firstName);
    }

    if (lastName) {
      this.elements.lastNameInput().should("be.visible").type(lastName);
    }

    if (email) {
      this.elements.emailInput().should("be.visible").type(email);
    }

    if (password) {
      this.elements.passwordInput().should("be.visible").type(password);
    }

    return this;
  }

  clickSubmit() {
    this.elements.submitBtn().should("be.visible").click();
    return this;
  }

  clickCancel() {
    this.elements.cancelBtn().click();
  }
}

export default new RegistrationPage();
