import { mount } from "@cypress/react";
import { Box } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Box>Box</Box>);
  });

  it("Box 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".Box").should("be.exist");
  });

  it("Box는 'Box' 클래스명을 갖습니다.", () => {
    cy.get(".Box").should("have.class", "Box");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Box
        width="200px"
        height="400px"
        background="yellow"
        color="red"
        borderRadius="500"
        border="2px solid green"
      >
        Box
      </Box>
    );
  });

  it("Box의 children으로 'Box' 텍스트가 보입니다.", () => {
    cy.get(".Box").should("have.text", "Box");
  });

  it("Box의 width는 '200px'입니다.", () => {
    cy.get(".Box").should("have.css", "width", "200px");
  });

  it("Box의 height는 '400px'입니다.", () => {
    cy.get(".Box").should("have.css", "height", "400px");
  });

  it("Box의 color는 'red'입니다.", () => {
    cy.get(".Box").should("have.css", "color", "rgb(255, 0, 0)");
  });

  it("Box의 border '2px solid green'입니다.", () => {
    cy.get(".Box").should("have.css", "border", "2px solid rgb(0, 128, 0)");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onClickSpy = cy.spy().as("onClickSpy");
    mount(<Box onClick={onClickSpy}>Box</Box>);
  });

  it("Box 컴포넌트를 클릭하면 @onClickSpy 함수가 실행됩니다.", () => {
    cy.get(".Box").click();
    cy.get("@onClickSpy").should("have.been.called.with", 1);
  });
});
