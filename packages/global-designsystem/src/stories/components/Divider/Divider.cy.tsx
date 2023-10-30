import { mount } from "@cypress/react";
import { Divider } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Divider />);
  });

  it("Divider 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".Divider").should("be.exist");
  });

  it("Divider 컴포넌트는 'Divider' 클래스를 갖습니다.", () => {
    cy.get(".Divider").should("have.class", "Divider");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Divider orientation="vertical" stroke={2} length="50px" />);
  });

  it("orientation이 'vertical'이면 'vertical' class를 갖습니다.", () => {
    cy.get(".Divider").should("have.class", "vertical");
  });

  it("orientation이 'vertical'일 경우 stroke 2이면 width '2px'을 갖습니다.", () => {
    cy.get(".Divider").should("have.css", "width", "2px");
  });

  it("orientation이 'vertical'일 경우 length '50px'이면 height '50px'을 갖습니다.", () => {
    cy.get(".Divider").should("have.css", "height", "50px");
  });
});

describe("Testing Event Handlers", () => {});
