//Test Cases automated in Sprint01
// Test Case Description	            Tags
// Register with valid user	        smoke, regression
// Register with existing user	    regression
// Login with valid credentials	    smoke, regression
// Login with invalid credentials	  regression
// Logout	                          smoke, regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";
import RegistrationPage from "../../../../pages/RegistrationPage";
//setup and teardown methods implemented using API requests

describe("Sprint 01 - Authentication Suite", () => {
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

  it("Register with valid user", () => {
    //click signup button and navigate to it
    LoginPage.clickSignup();

    //validate registration page url
    RegistrationPage.validateRegistrationPage().fillRegistraionDetails(
      "validRegistrableUser",
      user_credentials
    );

    //cleanup method to delete registered account
  });

  it("Register with existing user", () => {
    //click signup button and navigate to it
    LoginPage.clickSignup();

    //validate registration page url
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails("existingUser", user_credentials)
      .clickSubmit()
      .validateExistingUserError();
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
