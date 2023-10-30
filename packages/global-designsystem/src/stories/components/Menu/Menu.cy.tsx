import { mount } from "@cypress/react";
import { Menu } from ".";
import { ListButton } from "../ListButton";
import { useState } from "react";

const Example = () => {
  const [showMenu, setShowMenu] = useState(true);
  const onClickSpy = cy.spy().as("onClickSpy");
  const onMouseEnter = cy.spy().as("onMouseEnter");
  const onMouseLeave = cy.spy().as("onMouseLeave");
  return (
    <Menu
      anchorEl={
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          Click
        </button>
      }
      show={showMenu}
      onClickAway={() => {
        setShowMenu(false);
      }}
      disableBackDrop
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ListButton onClick={onClickSpy}>Home</ListButton>
      <ListButton onClick={onClickSpy}>Discover</ListButton>
      <ListButton onClick={onClickSpy}>Settings</ListButton>
    </Menu>
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("Menu 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Menu").should("be.exist");
  });

  it("Menu 컴포넌트는 'Menu' 클래스를 갖습니다.", () => {
    cy.get(".Menu").should("have.class", "Menu");
  });
});

describe("Passing Props to Components", () => {});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("button 클릭하면 Menu가 사라집니다.", () => {
    cy.get("button:not(.ListButton)").click();
    cy.get(".Menu").should("not.be.exist");
  });

  it("button에 mouseover하면 @onMouseEnter함수가 호출됩니다.", () => {
    cy.get("button:not(.ListButton)").trigger("mouseover");
    cy.get("@onMouseEnter").should("have.been.called.with", 1);
  });

  it("button에 mouseout하면 @onMouseLeave함수가 호출됩니다.", () => {
    cy.get("button:not(.ListButton)").trigger("mouseout");
    cy.get("@onMouseLeave").should("have.been.called.with", 1);
  });

  it("Menu 항목을 클릭하면 '@onClickSpy'함수가 호출됩니다.", () => {
    cy.get(".ListButton").eq(0).click();
    cy.get("@onClickSpy").should("have.been.called.with", 1);
  });
});
