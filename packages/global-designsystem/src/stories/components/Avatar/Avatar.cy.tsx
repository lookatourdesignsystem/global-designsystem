import { mount } from "@cypress/react";
import { Avatar } from ".";
import Avartar from "../../../assets/images/avatar_01.jpeg";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Avatar />);
  });

  it("Avatar 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Avatar").should("be.exist");
  });

  it("Avatar 컴포넌트에 PeopleFilledIcon 아이콘이 랜더링됩니다.", () => {
    cy.get(".Avatar")
      .find("svg")
      .should("have.attr", "title", "PeopleFilledIcon");
  });

  it("Avatar 컴포넌트 안에 아이콘 배경 기본 배경색은 rgb(243, 243, 243) 입니다.", () => {
    cy.get(".Avatar").should(
      "have.css",
      "background-color",
      "rgb(243, 243, 243)"
    );
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Avatar alt="Cindy Baker" src={Avartar} />);
  });

  it("alt값은 'Cindy Baker' 입니다.", () => {
    cy.get(".Avatar img").should("have.attr", "alt", "Cindy Baker");
  });
});

describe("Testing Event Handlers", () => {});
