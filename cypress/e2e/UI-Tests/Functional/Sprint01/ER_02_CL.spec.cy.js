//Test Cases automated in Sprint01 ER02
// ---Test Case Description---	              ---Tags---
// Login with valid credentials and logout     smoke, regression
// Login with invalid credentials	             regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";

describe("Sprint 01 - Authentication Suite - Login", () => {
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

  it(
    "Login with valid credentials",
    { tags: ["@smoke", "@regression"] },
    () => {
      //validate login page url
      cy.contains("p", "Log In:", { matchCase: false });

      LoginPage.fillLoginDetails(
        "existingUser",
        user_credentials
      ).clickSubmit();

      ContactListPage.validateLoggedIn().clickLogout();
    }
  );

  it("Login with invalid credentials", { tags: ["@regression"] }, () => {
    //tag:smoke

    //validate login page url
    cy.contains("p", "Log In:", { matchCase: false });

    LoginPage.fillLoginDetails("invalidEmail", user_credentials)
      .clickSubmit()
      .validateInvalidCredentials();
  });
});
