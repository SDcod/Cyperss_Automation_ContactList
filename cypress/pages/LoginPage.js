class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    submitBtn: () => cy.get("#submit"),
    signupBtn: () => cy.get("#signup"),
    errorMsg: () => cy.get("#error", { timeout: 8000 }),
  };

  enterEmail(email) {
    //custom command to handle input for empty string scenarios
    cy.inputField(this.elements.emailInput(), email);
    return this;
  }
  enterPassword(password) {
    //custom command to handle input for empty string scenarios
    cy.inputField(this.elements.passwordInput(), password);
    return this;
  }
  clickSubmit() {
    this.elements.submitBtn().should("be.visible").click();
    return this;
  }
  clickSignup() {
    this.elements.signupBtn().should("be.visible").click();
    return this;
  }

  fillLoginDetails(userType, dataObject) {
    let email = dataObject[userType].email;
    let password = dataObject[userType].password;

    //use the actual credentials through env file
    if (userType == "existingUser") {
      email = Cypress.env("USER_EMAIL");
      password = Cypress.env("USER_PASSWORD");
    }

    if (email) {
      this.enterEmail(email);
    }
    if (password) {
      this.enterPassword(password);
    }
    return this;
  }

  validateInvalidCredentials() {
    this.elements
      .errorMsg()
      .should("have.text", "Incorrect username or password");
  }
}

export default new LoginPage();
