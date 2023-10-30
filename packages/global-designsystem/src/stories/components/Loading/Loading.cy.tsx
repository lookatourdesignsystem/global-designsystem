import { mount } from "@cypress/react";
import { Loading } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Loading />);
  });

  it("Loading 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Loading").should("be.exist");
  });

  it("Loading 컴포넌트는 'Loading' 클래스를 갖습니다.", () => {
    cy.get(".Loading").should("have.class", "Loading");
  });

  it("Loading 컴포넌트 기본 배경은 '#dddddd'입니다.", () => {
    cy.get(".Loading svg circle").eq(0).should("have.attr", "color", "#dddddd");
  });

  it("Loading 컴포넌트 기본 stroke 색은 '#000000' 입니다.", () => {
    cy.get(".Loading svg circle").eq(1).should("have.attr", "color", "#000000");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Loading color="success" size={100} thickness={10} label="라벨" />);
  });

  it("state가 success이면 stroke 색은 '#4caf50' 입니다.", () => {
    cy.get(".Loading svg circle").eq(1).should("have.attr", "color", "#4caf50");
  });

  it("원헝 크기가 100px 입니다.", () => {
    cy.get(".Loading > span").should("have.css", "width", "100px");
  });

  it("stroke 굵기는 '10px' 입니다.", () => {
    cy.get(".Loading svg circle")
      .eq(0)
      .should("have.attr", "stroke-width", "10");
  });
});

describe("Testing Event Handlers", () => {});
