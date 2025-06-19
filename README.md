//Cypress project to automate Contact list app

Cypress + JS + POM + GithubActions (cicd)

TestCase Type separation strategy - using JS modules

Folder Structure
cypress/
├── e2e/
│   ├── smoke/
│   │   └── smoke_auth.cy.js
│   │   └── smoke_contacts.cy.js
│   ├── regression/
│   │   └── regression_auth.cy.js
│   │   └── regression_contacts.cy.js
│   └── common/
│       └── contacts_test_cases.js
├── fixtures/
│   └── user_credentials.json
│   └── contact_data.json
├── pages/
│   ├── loginPage.js
│   ├── registerPage.js
│   ├── contactListPage.js
├── support/
│   └── commands.js
└── reports/
