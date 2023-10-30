import { mount } from "@cypress/react";
import { InlineLoading } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<InlineLoading />);
  });

  it("v 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".InlineLoading").should("be.exist");
  });

  it("InlineLoading 컴포넌트는 'InlineLoading' 클래스를 갖습니다.", () => {
    cy.get(".InlineLoading").should("have.class", "InlineLoading");
  });

  it("InlineLoading 컴포넌트 기본 배경은 'rgb(0, 0, 0)'입니다.", () => {
    cy.get(".InlineLoading div")
      .eq(0)
      .should("have.css", "background-color", "rgb(0, 0, 0)");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<InlineLoading color="warning" />);
  });

  it("color가 warning이면 색은 'rgb(249, 168, 37)' 입니다.", () => {
    cy.get(".InlineLoading div")
      .eq(0)
      .should("have.css", "background-color", "rgb(249, 168, 37)");
  });
});

describe("Testing Event Handlers", () => {});
