class LoginPage {
  elements = {
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    submitBtn: () => cy.get("#submit"),
    signupBtn: () => cy.get("#signup"),
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
}

export default new LoginPage();
