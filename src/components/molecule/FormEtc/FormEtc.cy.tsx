import FormEtc from "./index";

describe("<FormEtc />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormEtc />);

    cy.get("#campo-etc").focus();

    cy.wait(1000);

    cy.get("#campo-etc").type("oi oi");

    cy.wait(1000);

    cy.get("#button-etc").click();

    cy.wait(1000);

    cy.get("#campo-etc")
      .invoke("val")
      .then((value) => {
        cy.get("#info-text").should("have.text", value);
      });
  });
});
