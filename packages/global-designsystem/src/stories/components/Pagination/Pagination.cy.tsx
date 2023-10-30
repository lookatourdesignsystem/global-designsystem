import { mount } from "@cypress/react";
import { Pagination } from ".";
import { ListButton } from "../ListButton";
import { useState } from "react";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Pagination defaultPage={1} totalLength={100} sectionSize={10} />);
  });

  it("Pagination 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Pagination").should("be.exist");
  });

  it("Pagination 컴포넌트는 'Pagination' 클래스를 갖습니다.", () => {
    cy.get(".Pagination").should("have.class", "Pagination");
  });

  it("첫번째 페이지가 선택되어있습니다.", () => {
    cy.get(".Pagination ul li")
      .eq(1)
      .find("button")
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });

  it("왼쪽 버튼은 disabled 상태입니다.", () => {
    cy.get(".Pagination ul li")
      .eq(0)
      .find("button")
      .should("have.attr", "disabled", "disabled");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Pagination defaultPage={7} totalLength={100} sectionSize={5} />);
  });

  it("15 페이지가 선택되어있습니다.", () => {
    cy.get(".Pagination ul li").eq(2).find("button").should("have.text", "7");
    cy.get(".Pagination ul li")
      .eq(2)
      .find("button")
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });

  it("section의 길이는 5입니다.", () => {
    cy.get(".Pagination ul li").should("have.length", "7");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Pagination defaultPage={1} totalLength={100} sectionSize={10} />);
  });

  it("5페이지를 선택하면 5페이지가 선택됩니다.", () => {
    cy.get(".Pagination ul li").eq(5).find("button").click();
    cy.get(".Pagination ul li")
      .find("button")
      .eq(5)
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });

  it("오른쪽 화살표를 클릭하면 11페이지가 선택됩니다.", () => {
    cy.get(".Pagination ul li").eq(11).find("button").click();
    cy.get(".Pagination ul li").find("button").eq(1).should("have.text", "11");
    cy.get(".Pagination ul li")
      .find("button")
      .eq(1)
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });

  it("11페이지에서 왼쪽 화살표를 클릭하면 1페이지로 선택됩니다.", () => {
    cy.get(".Pagination ul li").eq(11).find("button").click();
    cy.get(".Pagination ul li").eq(0).find("button").click();
    cy.get(".Pagination ul li").find("button").eq(1).should("have.text", "1");
    cy.get(".Pagination ul li")
      .find("button")
      .eq(1)
      .should("have.css", "background-color", "rgb(0, 115, 240)");
  });
});
