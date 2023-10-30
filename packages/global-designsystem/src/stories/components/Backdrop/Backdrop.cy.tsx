import { mount } from "@cypress/react";
import { Backdrop } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Backdrop />);
  });

  it("Backdrop컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Backdrop").should("be.exist");
  });

  it("'Backdrop'라는 클래스명을 갖습니다.", () => {
    cy.get(".Backdrop").should("have.class", "Backdrop");
  });

  it("초기값으로 background-color는 rbga(0,0,0,0.5)입니다.", () => {
    cy.get(".Backdrop").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0.5)"
    );
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Backdrop className="CustomClassName" color="#ff0000" />);
  });

  it("className prop으로 넘겨진 'CustomClassName'라는 클래스명을 갖습니다.", () => {
    cy.get(".Backdrop").should("have.class", "CustomClassName");
  });

  it("color prop으로 #ff0000을 넘기면 background-color는 #ff0000입니다.", () => {
    cy.get(".Backdrop").should(
      "have.css",
      "background-color",
      "rgb(255, 0, 0)"
    );
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onCloseSpy = cy.spy().as("onCloseSpy");
    mount(<Backdrop onClick={onCloseSpy} />);
  });

  it("Backdrop 컴포넌트를 클릭하면 @onClickSpy 함수가 실행됩니다.", () => {
    cy.get(".Backdrop").click();
    cy.get("@onCloseSpy").should("have.been.called.with", 1);
  });
});
