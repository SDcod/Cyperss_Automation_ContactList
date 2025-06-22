// ---Test Case Description---	                  ---Tags---
// Add a new contact with all fields.	            smoke, regression
// Add a new contact with mandatory fields only.  smoke, regression
// Add a contact with missing required fields.  	smoke, regression
// Add a contact with invalid email               regression
// Add a contact with invalid phonenumber         regression
// Add a contact with invalid birthdate           regression
// Search contact by name/email	                  regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";

describe("Sprint 02 - Conctact Suite - Contact Creation", () => {
  let user_credentials = {};
  let contact_data = {};

  before(() => {
    //Load test Data and assing to a global variable.
    cy.fixture("user_credentials.json").then((data) => {
      user_credentials = data;
    });

    //load contact data
    cy.fixture("contact_data.json").then((data) => {
      contact_data = data;
    });
  });

  beforeEach(() => {
    //navigate to login/landing page
    cy.visit("/");

    //login with valid creds.
    cy.contains("p", "Log In:", { matchCase: false });

    LoginPage.enterEmail(user_credentials.existingUser.email)
      .enterPassword(user_credentials.existingUser.password)
      .clickSubmit();

    ContactListPage.validateLoggedIn();
  });

  it.only(
    "Add a new contact with all fields",
    { tags: ["@smoke", "@regression"] },
    () => {
      let testType = "allFields";
      let fullName = `${contact_data["allFields"].firstName} ${contact_data["allFields"].lastName}`;

      ContactListPage.validateLoggedIn()
        .clickAddNewContact()
        .fillContactForm(testType, contact_data)
        .clickSubmit()
        .validateListTableVisible()
        .openContactRecordUsingName(fullName)
        .clickDeleteContact();
    }
  );

  it(
    "Add a new contact with mandatory fields only",
    { tags: ["@smoke", "@regression"] },
    () => {
      ContactListPage.validateLoggedIn()
        .clickAddNewContact()
        .fillContactForm("mandatoryFields", contact_data);
    }
  );
});
