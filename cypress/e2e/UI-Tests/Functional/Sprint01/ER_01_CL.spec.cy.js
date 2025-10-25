//Test Cases automated in Sprint01 ER01
// ---Test Case Description---	      ---Tags---
// Register with valid user	        smoke, regression
// Register with existing user	    regression
// Register with missing first name regression
// Register with missing last name  -
// Register with missing email      regression
// Register with invalid email      smoke,regression
// Register with missing password   -
// Register with weak password      -

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";
import RegistrationPage from "../../../../pages/RegistrationPage";
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

  it("Register using valid user", { tags: ["@smoke", "@regression"] }, () => {
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

  it("Register with existing user", { tags: ["@regression"] }, () => {
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

  it("Register with missing first name", { tags: ["@regression"] }, () => {
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

  it("Register with missing last name", { tags: ["@regression"] }, () => {
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

  it("Register with missing email", { tags: ["@regression"] }, () => {
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

  it("Register with invalid email", { tags: ["@smoke", "@regression"] }, () => {
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
