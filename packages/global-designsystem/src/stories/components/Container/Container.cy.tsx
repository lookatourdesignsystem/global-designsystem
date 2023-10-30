import { mount } from "@cypress/react";
import { Container } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Container>Box</Container>);
  });

  it("Container 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".Container").should("be.exist");
  });

  it("Container 'Container' 클래스명을 갖습니다.", () => {
    cy.get(".Container").should("have.class", "Container");
  });

  it("너비 0 ~ 600까지는 max-width '100%'를 갖습니다.", () => {
    cy.viewport(400, 500);
    cy.get(".Container").should("have.css", "width", "384px");
  });

  it("너비 600 ~ 1024까지는 max-width '100%'를 갖습니다.", () => {
    cy.viewport(700, 500);
    cy.get(".Container").should("have.css", "width", "684px");
  });

  it("너비 1024 ~ 1440까지는 max-width '1024px'을 갖습니다.", () => {
    cy.viewport(1400, 500);
    cy.get(".Container").should("have.css", "width", "1384px");
  });

  it("너비 1440가 넘으면 max-width '1440px'을 갖습니다.", () => {
    cy.viewport(1600, 500);
    cy.get(".Container").should("have.css", "width", "1584px");
  });
});

describe("Passing Props to Components", () => {});

describe("Testing Event Handlers", () => {});
