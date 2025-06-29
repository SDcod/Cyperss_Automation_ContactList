//get users using valid API key
//get users using invalid API endpoint

describe("Get users using API", () => {
  it(
    "get users using valid API key",
    { tags: ["@smoke", "@regression"] },
    () => {
      cy.request({
        url: "/public/v2/users",
        method: "GET",
      }).then((res) => {
        let jsonData = JSON.stringify(res.body);
        expect(res.status).to.equal(200);
        cy.log(jsonData);
      });
    }
  );

  it("get users using invalid API endpoint", { tags: ["@regression"] }, () => {
    cy.request({
      url: "/public/v2/user",
      method: "GET",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.equal(404);
    });
  });
});
