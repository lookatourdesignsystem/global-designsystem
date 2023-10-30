import { mount } from "@cypress/react";
import { ProgressBar } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<ProgressBar variant="indeterminate" />);
  });

  it("ProgressBar 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".ProgressBar").should("be.exist");
  });

  it("ProgressBar 컴포넌트는 'ProgressBar' 클래스를 갖습니다.", () => {
    cy.get(".ProgressBar").should("have.class", "ProgressBar");
  });

  it("ProgressBar 컴포넌트 기본 배경은 'rgb(221, 221, 221)'입니다.", () => {
    cy.get(".ProgressBar > span").should(
      "have.css",
      "background-color",
      "rgb(221, 221, 221)"
    );
  });

  it("ProgressBar 컴포넌트 기본 stroke 색은 'rgb(0, 115, 240)' 입니다.", () => {
    cy.get(".ProgressBar > span > span")
      .eq(0)
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <ProgressBar
        variant="determinate"
        value={70}
        state="error"
        label="라벨"
        helperText="에러입니다"
      />
    );
  });

  it("state가 error일 때 stroke 색은 '#d32f2f' 입니다.", () => {
    cy.get(".ProgressBar > span > span")
      .eq(0)
      .should("have.attr", "color", "#d32f2f");
  });

  it("value가 70이면 bar가 전체너비의 70%로 채워집니다.", () => {
    cy.get(".ProgressBar > span > span").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, -145.2, 0)"
    );
  });

  it("label은 '라벨'입니다.", () => {
    cy.get(".ProgressBarLabel").should("have.text", "라벨");
  });

  it("helperText는 '에러입니다'입니다.", () => {
    cy.get(".ProgressBarHelperText").should("have.text", "에러입니다");
  });
});

describe("Testing Event Handlers", () => {});
