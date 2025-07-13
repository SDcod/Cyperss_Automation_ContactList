// ---Test Case Description---	                ---Tags---
// Edit an existing contact	                smoke, regression
// Delete an existing contact	                smoke, regression
// Validate duplicate contact not allowed	    regression

import LoginPage from "../../../../pages/LoginPage";
import ContactListPage from "../../../../pages/ContactListPage";
import ContactDetailsPage from "../../../../pages/ContactDetailsPage";
import AddContactPage from "../../../../pages/AddContactPage";
import EditcontactPage from "../../../../pages/EditcontactPage";

describe("Sprint 02 - Conctact Suite - Contact Modifications", () => {
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
    // cy.deleteAllContacts();
    cy.Logout();
  });

  it(
    "Edit First Name of a Contact",
    { tags: ["@smoke", "@regression"] },
    () => {
      let testType = "allFields";
      let firstName = contact_data[testType].firstName;
      let lastName = contact_data[testType].lastName;
      let fullName = `${firstName} ${lastName}`;
      let newFirstName = "updated";

      ContactListPage.validateLoggedIn().clickAddNewContact();

      //Adding new contact
      AddContactPage.fillContactForm(testType, contact_data).clickSubmit();

      ContactListPage.validateListTableVisible().openContactRecordUsingName(
        fullName
      );

      ContactDetailsPage.validateDetailsPage()
        .validateContactDetails(firstName, lastName)
        .clickEditContact();

      EditcontactPage.validateFormVisible()
        .editFirstName(firstName, newFirstName)
        .saveEdit();

      //validate change and delete the contact
      ContactDetailsPage.validateDetailsPage()
        .validateContactDetails(newFirstName, lastName)
        .confirmDeletePrompt(true);
    }
  );
});
