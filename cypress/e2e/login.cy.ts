describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    // test input validation

    cy.get("#button-send").click();

    cy.get("#input-error-msg").first().should("have.text", "Campo obrigatório");

    // test input validation after type input

    // test language button

    // test theme button

    // test login
  });
});
