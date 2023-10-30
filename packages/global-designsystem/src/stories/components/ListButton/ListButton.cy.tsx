import { mount } from "@cypress/react";
import { Typography } from "../../foundation/Typography";
import { ListButton } from ".";
import { FundCoinbaseIcon } from "@lookatourdesignsystem/icons-library";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(
      <ListButton>
        <Typography variant="subtitle1">Send</Typography>
      </ListButton>
    );
  });

  it("ListButton 컴포넌트가 렌더링됩니다.", () => {
    cy.get("button").should("be.exist");
  });

  it("ListButton 컴포넌트는 'ListButton' 클래스를 갖습니다.", () => {
    cy.get("button").should("have.class", "ListButton");
  });

  it("ListButton 컴포넌트는 기본 type 'button'입니다.", () => {
    cy.get("button").should("have.attr", "type", "button");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <ListButton disabled selected>
        <FundCoinbaseIcon />
        <Typography variant="subtitle1">Send</Typography>
      </ListButton>
    );
  });

  it("disabled 이면 opacity가 0.3이고 disabled 처리됩니다.", () => {
    cy.get("button").should("have.attr", "disabled", "disabled");
    cy.get("button").should("have.css", "opacity", "0.3");
  });

  it("selected 이면 border가 1px solid #0073F0입니다.", () => {
    cy.get("button").should("have.css", "border", "1px solid rgb(0, 115, 240)");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onClickSpy = cy.spy().as("onClickSpy");
    mount(
      <ListButton onClick={onClickSpy}>
        <Typography variant="subtitle1">Send</Typography>
      </ListButton>
    );
  });

  it("hover 하면 background-color는 opacity가 rgb(239, 239, 239)입니다.", () => {
    cy.get("button").trigger("mouseover");
    cy.get("button").should(
      "have.css",
      "background-color",
      "rgb(239, 239, 239)"
    );
  });

  it("ListButton을 클릭하면 '@onClickSpy'함수가 호출됩니다.", () => {
    cy.get("button").click();
    cy.get("@onClickSpy").should("have.been.called.with", 1);
  });
});
