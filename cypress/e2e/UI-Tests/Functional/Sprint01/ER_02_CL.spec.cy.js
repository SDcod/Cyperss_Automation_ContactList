//Test Cases automated in Sprint01 ER02
// ---Test Case Description---	      ---Tags---
// Login with valid credentials	      smoke, regression
// Login with invalid credentials	  regression
// Logout	                          smoke, regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";

describe("Sprint 01 - Authentication Suite - Registration", () => {
  let user_credentials = {};

  before(() => {
    //Load test Data and assing to a global variable.
    cy.fixture("user_credentials.json").then((data) => {
      user_credentials = data;
    });
  });

  beforeEach(() => {
    //navigate to login/landing page
    cy.visit("/");
  });

  it("Login with valid credentials", () => {
    //validate login page url
    cy.contains("p", "Log In:", { matchCase: false });

    LoginPage.enterEmail(user_credentials.existingUser.email)
      .enterPassword(user_credentials.existingUser.password)
      .clickSubmit();

    ContactListPage.validateLoggedIn().clickLogout();
  });
});
