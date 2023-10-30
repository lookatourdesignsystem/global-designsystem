import { mount } from "@cypress/react";
import { Chip } from ".";
import {
  CheckCircleFilledIcon,
  CheckCircleOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Chip type={"solid"} color={"default"} size={"s"} label={"Chip"} />);
  });

  it("Chip이 렌더링 됩니다.", () => {
    cy.get(".Chip").should("be.exist");
  });
  it("Chip은 'Chip'라는 클래스명을 갖습니다.", () => {
    cy.get(".Chip").should("have.class", "Chip");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Chip
        type={"outline"}
        color={"primary"}
        size={"s"}
        label={"Props"}
        leftIcon={<CheckCircleFilledIcon />}
        rightIcon={<CheckCircleOutlinedIcon />}
      />
    );
  });

  it("outline type을 가집니다.", () => {
    cy.get(".Chip").should("have.attr", "type", "outline");
  });

  it("border는 '1px solid rgb(0, 115, 240)' 입니다.", () => {
    cy.get(".Chip").should("have.css", "border", "1px solid rgb(0, 115, 240)");
  });

  it("label은 'Props' 입니다.", () => {
    cy.get(".Chip").should("have.text", "Props");
  });

  it("size는 's'입니다.", () => {
    cy.get(".Chip").should("have.class", "s");
  });

  it("Chip 왼쪽에 CheckCircleFilledIcon아이콘이 있습니다.", () => {
    cy.get(".Chip svg")
      .eq(0)
      .should("have.attr", "title", "CheckCircleFilledIcon");
  });

  it("Chip 오른쪽에 CheckCircleOutlinedIcon아이콘이 있습니다.", () => {
    cy.get(".Chip svg")
      .eq(1)
      .should("have.attr", "title", "CheckCircleOutlinedIcon");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onClickSpy = cy.spy().as("onClickSpy");
    mount(
      <Chip
        type={"solid"}
        color={"default"}
        size={"s"}
        label={"Chip"}
        onClick={onClickSpy}
      />
    );
  });

  it("Chip 컴포넌트를 클릭하면 @onClickSpy 함수가 실행됩니다.", () => {
    cy.get(".Chip").click();
    cy.get("@onClickSpy").should("have.been.called.with", 1);
  });
});
