import { mount } from "@cypress/react";
import { Skeleton } from ".";

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Skeleton variant={"text"} width={100} height={100} />);
  });

  it("Skeleton 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".Skeleton").should("be.exist");
  });

  it("Skeleton 'Skeleton' 클래스명을 갖습니다.", () => {
    cy.get(".Skeleton").should("have.class", "Skeleton");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Skeleton
        variant={"text"}
        wordType={"sentence"}
        width={200}
        height={10}
        line={11}
        radius={3}
        gap={5}
        title="로딩중"
      />
    );
  });

  it("Skeleton의 width는 200 입니다.", () => {
    cy.get(".Skeleton").should("have.attr", "width", "200");
  });

  it("Skeleton의 height는 160 입니다.", () => {
    cy.get(".Skeleton").should("have.attr", "height", "160");
  });

  it("rect의 height는 10 입니다.", () => {
    cy.get(".Skeleton clipPath rect").eq(0).should("have.attr", "height", "10");
  });

  it("첫번째 rect의 width는 100% 입니다.", () => {
    cy.get(".Skeleton clipPath rect")
      .eq(0)
      .should("have.attr", "width", "100%");
  });

  it("마지막 rect의 width는 50% 입니다.", () => {
    cy.get(".Skeleton clipPath rect")
      .eq(10)
      .should("have.attr", "width", "50%");
  });

  it("title은 '로딩중'입니다.", () => {
    cy.get(".Skeleton title").should("have.text", "로딩중");
  });

  it("rect의 개수는 11개입니다.", () => {
    cy.get(".Skeleton clipPath rect").should("have.length", 11);
  });
});

describe("Testing Event Handlers", () => {});
