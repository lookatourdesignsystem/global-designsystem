import { mount } from "@cypress/react";
import { ButtonGroup } from ".";

const Example = ({
  direction,
  size,
  onChange,
}: {
  direction?: "horizontal" | "vertical";
  size?: "s" | "m" | "l";
  onChange: (activeTab: number) => {};
}) => {
  return (
    <ButtonGroup
      selectedIndex={0}
      onChange={onChange}
      items={["Button", "Button", "Button"]}
      direction={direction}
      size={size}
    />
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    const onChange = cy.spy().as("onChange");
    mount(<Example onChange={onChange} />);
  });

  it("ButtonGroup 컴포넌트가 렌더링됩니다..", () => {
    cy.get(".ButtonGroup").should("be.exist");
  });

  it("ButtonGroup 'ButtonGroup' 클래스명을 갖습니다.", () => {
    cy.get(".ButtonGroup").should("have.class", "ButtonGroup");
  });

  it("direction 기본값은 'horizontal'입니다.", () => {
    cy.get(".ButtonGroup").eq(0).should("have.attr", "direction", "horizontal");
  });

  it("size 기본값은 'm'이고 내부에 있는 button의 사이즈는 'xs'입니다.", () => {
    cy.get(".ButtonGroup button").eq(0).should("have.class", "xs");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    const onChange = cy.spy().as("onChange");
    mount(<Example direction="vertical" size="s" onChange={onChange} />);
  });

  it("direction 값은 'vertical'입니다.", () => {
    cy.get(".ButtonGroup").eq(0).should("have.attr", "direction", "vertical");
  });

  it("size 값은 'small'입니다.", () => {
    cy.get(".ButtonGroup button").eq(0).should("have.class", "xxs");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    const onChange = cy.spy().as("onChange");
    mount(<Example onChange={onChange} />);
  });

  it("button을 클릭하면 @onChange 함수가 실행됩니다.", () => {
    cy.get(".ButtonGroup button").eq(0).click();
    cy.get("@onChange").should("have.been.called.with", 1);
  });
});
