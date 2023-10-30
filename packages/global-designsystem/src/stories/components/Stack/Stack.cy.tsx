import { mount } from "@cypress/react";
import styled from "@emotion/styled";
import { Stack } from ".";

const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: pink;
  color: red;
`;

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(
      <Stack>
        {[...Array(4)].map((item, i) => (
          <StyledBox key={i}>Box {i}</StyledBox>
        ))}
      </Stack>
    );
  });

  it("Stack 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Stack").should("be.visible");
  });

  it("Stack 'Stack' 클래스명을 갖습니다.", () => {
    cy.get(".Stack").should("have.class", "Stack");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Stack spacing="1000" direction="row" p="100">
        {[...Array(4)].map((item, i) => (
          <StyledBox key={i}>Box {i}</StyledBox>
        ))}
      </Stack>
    );
  });

  it("direction row 방향을 갖습니다.", () => {
    cy.get(".Stack").should("have.css", "flex-direction", "row");
  });
});

describe("Testing Event Handlers", () => {});
