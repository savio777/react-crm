describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.wait(2000);

    // test input validation

    cy.get("#button-send").click();

    cy.get("#input-error-msg").first().should("have.text", "Campo obrigatório");

    // test language button

    cy.wait(1000);

    cy.get("#button-language-change").click();

    cy.get("#button-send").should("have.text", "Enviar");

    // test theme button

    // test login

    cy.wait(1000);

    cy.get("#email").type("test");

    cy.get("#input-error-msg")
      .first()
      .should("have.text", "email must be a valid email");

    cy.get("#email").type("test@gmail.com");

    cy.get("#input-error-msg")
      .first()
      .should("not.have.text", "email must be a valid email");

    cy.get("#password").type("1234");

    cy.get("#button-send").should("not.be.disabled");

    cy.get("#button-send").click();

    cy.get("#title-page").should("have.text", "Dashboard");
  });
});
