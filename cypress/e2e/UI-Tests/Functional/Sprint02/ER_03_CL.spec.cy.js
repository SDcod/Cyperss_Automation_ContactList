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
import ContactDetailsPage from "../../../../pages/ContactDetailsPage";
import AddContactPage from "../../../../pages/AddContactPage";

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

    LoginPage.fillLoginDetails("existingUser", user_credentials).clickSubmit();

    ContactListPage.validateLoggedIn();
  });

  afterEach(() => {
    cy.Logout();
  });

  it(
    "Add a new contact with all fields",
    { tags: ["@smoke", "@regression"] },
    () => {
      let testType = "allFields";
      let firstName = contact_data[testType].firstName;
      let lastName = contact_data[testType].lastName;
      let fullName = `${firstName} ${lastName}`;

      ContactListPage.validateLoggedIn().clickAddNewContact();

      AddContactPage.fillContactForm(testType, contact_data).clickSubmit();

      ContactListPage.validateListTableVisible().openContactRecordUsingName(
        fullName
      );

      ContactDetailsPage.validateDetailsPage()
        .validateContactDetails(firstName, lastName)
        .confirmDeletePrompt(true); //deleting contact for clean evironment

      ContactListPage.validateContactListPage();
    }
  );

  it(
    "Add a new contact with mandatory fields only",
    { tags: ["@smoke", "@regression"] },
    () => {
      let testType = "mandatoryFields";
      let firstName = contact_data[testType].firstName;
      let lastName = contact_data[testType].lastName;
      let fullName = `${firstName} ${lastName}`;

      ContactListPage.validateLoggedIn().clickAddNewContact();

      AddContactPage.fillContactForm(testType, contact_data).clickSubmit();

      ContactListPage.validateListTableVisible().openContactRecordUsingName(
        fullName
      );

      ContactDetailsPage.validateDetailsPage()
        .validateContactDetails(firstName, lastName)
        .confirmDeletePrompt(true); //deleting contact for clean evironment

      ContactListPage.validateContactListPage();
    }
  );

  it(
    "Add a contact with missing required fields.",
    { tags: ["@regression"] },
    () => {
      let testType = "missingRequiredFields";
      let errorMsg = contact_data[testType].errorMsg;
      ContactListPage.validateLoggedIn().clickAddNewContact();
      AddContactPage.fillContactForm(testType, contact_data)
        .clickSubmit()
        .validateErrorMessage(errorMsg);
    }
  );

  it("Add a contact with invalid email", { tags: ["@regression"] }, () => {
    let testType = "invalidEmail";
    let errorMsg = contact_data[testType].errorMsg;
    ContactListPage.validateLoggedIn().clickAddNewContact();
    AddContactPage.fillContactForm(testType, contact_data)
      .clickSubmit()
      .validateErrorMessage(errorMsg);
  });
  it(
    "Add a contact with invalid phonenumber",
    { tags: ["@regression"] },
    () => {
      let testType = "invalidPhone";
      let errorMsg = contact_data[testType].errorMsg;
      ContactListPage.validateLoggedIn().clickAddNewContact();
      AddContactPage.fillContactForm(testType, contact_data)
        .clickSubmit()
        .validateErrorMessage(errorMsg);
    }
  );

  it("Add a contact with invalid birthdate", { tags: ["@regression"] }, () => {
    let testType = "invalidBirthdate";
    let errorMsg = contact_data[testType].errorMsg;
    ContactListPage.validateLoggedIn().clickAddNewContact();
    AddContactPage.fillContactForm(testType, contact_data)
      .clickSubmit()
      .validateErrorMessage(errorMsg);
  });
});
