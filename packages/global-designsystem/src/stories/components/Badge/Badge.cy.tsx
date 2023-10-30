import { mount } from "@cypress/react";
import { Badge } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(
      <Badge value={""}>
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
        >
          box (300x300)
        </div>
      </Badge>
    );
  });

  it("BadgeWrapper 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".BadgeWrapper").should("be.exist");
  });

  it("BadgeWrapper 안에 Badge안에 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".BadgeWrapper > .Badge").should("be.exist");
  });

  it("Badge 컴포넌트에 기본 배경색은 rgb(0, 0, 0)입니다.", () => {
    cy.get(".Badge").should("have.css", "background-color", "rgb(0, 0, 0)");
  });

  it("Badge 컴포넌트는 shape으로 기본값 'square'를 갖습니다.", () => {
    cy.get(".Badge").should("have.attr", "shape", "square");
  });

  it("Badge 컴포넌트는 right 기본값 '0px'을 갖습니다.", () => {
    cy.get(".Badge").should("have.css", "right", "0px");
  });

  it("Badge 컴포넌트는 top 기본값 '0px'을 갖습니다.", () => {
    cy.get(".Badge").should("have.css", "top", "0px");
  });

  // it("Avatar 컴포넌트 안에 아이콘 배경 기본 배경색은 rgb(243, 243, 243) 입니다.", () => {
  //   cy.get(".Avatar> div").should(
  //     "have.css",
  //     "background-color",
  //     "rgb(243, 243, 243)"
  //   );
  // });

  // it("Avatar 컴포넌트 안에 아이콘 기본색은 #999999 입니다.", () => {
  //   cy.get(".Avatar").find("svg").should("have.attr", "color", "#999999");
  // });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Badge
        value={10}
        color="warning"
        max={9}
        vertical="bottom"
        horizontal="left"
      >
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
        >
          box (300x300)
        </div>
      </Badge>
    );
  });

  it("value값은 10이고 max는 9일 때 '9+'이 보입니다.", () => {
    cy.get(".Badge").should("have.text", "9+");
  });

  it("color값이 'warning'이면 배경색 'rgb(249, 168, 37)'를 갖습니다.", () => {
    cy.get(".Badge").should(
      "have.css",
      "background-color",
      "rgb(249, 168, 37)"
    );
  });

  it("color값이 'warning'이면 배경색 'rgb(249, 168, 37)'를 갖습니다.", () => {
    cy.get(".Badge").should(
      "have.css",
      "background-color",
      "rgb(249, 168, 37)"
    );
  });

  it("children에 'pink'색 div가 있습니다.", () => {
    cy.get(".BadgeWrapper")
      .find("div")
      .eq(0)
      .should("have.css", "background-color", "rgb(255, 192, 203)");
  });

  it("children에 'pink'색 div에는 'box (300x300)' 텍스트가 보입니다.", () => {
    cy.get(".BadgeWrapper")
      .find("div")
      .eq(0)
      .should("have.text", "box (300x300)");
  });

  it("horizontal이 'left'이면 스타일 left는 '0px'을 갖습니다.", () => {
    cy.get(".Badge").should("have.css", "left", "0px");
  });

  it("vertical이 'bottom'이면 스타일 bottom '0px'을 갖습니다.", () => {
    cy.get(".Badge").should("have.css", "bottom", "0px");
  });
});

describe("Testing Event Handlers", () => {});
