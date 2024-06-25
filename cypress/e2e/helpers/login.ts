export const testLoginGeneric = () => {
  cy.visit("http://localhost:5173/");

  cy.get(".MuiTypography-h2").should("have.text", "Login");

  cy.wait(1000);

  cy.get("#language-button").click();

  cy.wait(1000);

  cy.get("#button-send").should("contain.text", "Envia");

  cy.wait(1000);

  cy.get("#email").type("email@gmail.com");

  cy.get('input[name="password"]').type("1234");

  cy.wait(1000);

  cy.get("#button-send").click();

  cy.wait(1000);

  cy.get(".MuiTypography-h2").last().should("have.text", "Dashboard");
};
