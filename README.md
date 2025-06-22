//Cypress project to automate Contact list app

Cypress + JS + POM + GithubActions (cicd)

TestCase Type separation strategy - using JS grep tags

reporting - using mochaawesome reports

Folder Structure
cypress/
├── e2e/
│   ├── SprintID/
│       └── ER_01_ID.cy.js
│       └── ER_02_ID.cy.js 
├── fixtures/
│   └── user_credentials.json
│   └── contact_data.json
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── ContactListPage.js
├── support/
│   └── commands.js
|   └── e2e.js
└── reports/
