//post user using valid API key
//post user using invalid API key

const { randomEmail } = require("../../utils/randomApiData");

describe("post user using API", () => {
  let payloadData = {};

  before(() => {
    cy.fixture("PostAPI-User.json").then((data) => {
      payloadData = data;
    });
  });

  it(
    "post user using valid API key",
    { tags: ["@smoke", "@regression"] },
    () => {
      payloadData.email = randomEmail(); //getting random email from utils/* using faker.js

      cy.request({
        method: "POST",
        url: "/public/v2/users",
        headers: {
          Authorization: `Bearer ${Cypress.env("API_KEY")}`,
        },
        body: payloadData, //using fixture data
      }).then((res) => {
        let jsonData = JSON.stringify(res.body);
        cy.log(jsonData);
        expect(res.status).to.equal(201);
        expect(res.body).has.property("name", payloadData.name);
        expect(res.body).has.property("email", payloadData.email);
      });
    }
  );

  it("post user using invalid API key", { tags: ["@regression"] }, () => {
    cy.request({
      method: "POST",
      url: "/public/v2/users",
      headers: {
        Authorization: `Bearer xxxxxxinvalidKeyxxxxxx`,
      },
      body: payloadData,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.equal(401);
    });
  });
});
