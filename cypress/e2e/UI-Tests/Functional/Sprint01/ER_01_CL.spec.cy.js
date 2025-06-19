//Test Cases automated in Sprint01 ER01
// ---Test Case Description---	      ---Tags---
// Register with valid user	        smoke, regression
// Register with existing user	    regression
// Login with valid credentials	    smoke, regression
// Login with invalid credentials	  regression
// Logout	                          smoke, regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";
import RegistrationPage from "../../../../support/RegistrationPage";
//setup and teardown methods implemented using API requests

describe("Sprint 01 - Authentication Suite - Registration", () => {
  //variables to store user credentials data form fixture and current test user
  let user_credentials = {};
  let currentUser = "";

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
    currentUser = "validRegistrableUser";
    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit();

    ContactListPage.validateLoggedIn();

    //custom command as cleanup method to delete registered account to maintain clean evironment
    cy.deleteUser();
  });

  it("Register with existing user", () => {
    currentUser = "existingUser";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with missing first name", () => {
    currentUser = "missingFirstName";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with missing last name", () => {
    currentUser = "missingLastName";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with missing email", () => {
    currentUser = "missingEmail";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with invalid email", () => {
    currentUser = "invalidEmail";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with missing password", () => {
    currentUser = "missingPassword";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });

  it("Register with weak password", () => {
    currentUser = "weakPassword";

    //click signup button and navigate to it
    LoginPage.clickSignup();

    //fill registration form and click submit
    RegistrationPage.validateRegistrationPage()
      .fillRegistraionDetails(currentUser, user_credentials)
      .clickSubmit()
      .validateRegistrationError(
        user_credentials[currentUser].registrationError
      );
  });
});
