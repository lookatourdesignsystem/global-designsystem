import { mount } from "@cypress/react";
import { ChevronLargeRightOutlinedIcon } from "@lookatourdesignsystem/icons-library";
import { Button } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Button>Box</Button>);
  });

  it("Button 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".Button").should("be.exist");
  });

  it("Button는 'Button' 클래스명을 갖습니다.", () => {
    cy.get(".Button").should("have.class", "Button");
  });

  it("Button의 기본 border-radius는 '8px'입니다.", () => {
    cy.get(".Button").should("have.css", "border-radius", "8px");
  });

  it("Button의 기본 type은 'button'입니다.", () => {
    cy.get(".Button").should("have.attr", "type", "button");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Button
        type="submit"
        variant="solidSub"
        size="l"
        disabled
        rightIcon={<ChevronLargeRightOutlinedIcon />}
        color="warning"
      >
        Button
      </Button>
    );
  });

  it("type은 'submit'입니다.", () => {
    cy.get(".Button").should("have.attr", "type", "submit");
  });

  it("size가 'l'이면 'l' 클래스명을 갖습니다.", () => {
    cy.get(".Button").should("have.class", "l");
  });

  it("disabled 상태입니다.", () => {
    cy.get(".Button").should("have.attr", "disabled", "disabled");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onClickSpy = cy.spy().as("onClickSpy");
    mount(<Button onClick={onClickSpy}>Button</Button>);
  });

  it("Button 컴포넌트를 클릭하면 @onClickSpy 함수가 실행됩니다.", () => {
    cy.get(".Button").click();
    cy.get("@onClickSpy").should("have.been.called.with", 1);
  });
});
