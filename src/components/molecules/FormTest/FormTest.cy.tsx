import FormTest from "./index";

describe("<FormTest />", () => {
  it("test action submit", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormTest />);

    // cy.get("#campo").type("test text");
    cy.get('input[name="campo"]').type("test text");

    cy.wait(1000);

    cy.get("#submit").click();

    cy.wait(1000);

    cy.get("#campo")
      .invoke("val")
      .then((value) => {
        cy.get("#text").should("have.text", value);
      });
  });
});
