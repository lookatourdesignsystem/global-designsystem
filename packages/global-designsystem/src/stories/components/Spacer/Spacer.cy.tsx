import { mount } from "@cypress/react";
import { Spacer } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Spacer />);
  });

  it("Spacer 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Spacer").should("not.be.visible");
  });

  it("Spacer는 'Spacer' 클래스명을 갖습니다.", () => {
    cy.get(".Spacer").should("have.class", "Spacer");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Spacer x="100" y="100" />);
  });

  it("Spacer width 4px을 갖습니다.", () => {
    cy.get(".Spacer").should("have.css", "width", "4px");
  });

  it("Spacer height 4px을 갖습니다.", () => {
    cy.get(".Spacer").should("have.css", "height", "4px");
  });
});

describe("Testing Event Handlers", () => {});
