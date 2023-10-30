import { mount } from "@cypress/react";
import { PolygonCircleFilledIcon } from "@lookatourdesignsystem/icons-library";
import { ReactNode, useState } from "react";
import { Tabs } from ".";

const Example = ({
  icon,
  defaultIndex = 0,
}: {
  icon?: ReactNode;
  defaultIndex?: number;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
  const handleChange = (activeTab: number) => {
    setSelectedIndex(activeTab);
  };
  return (
    <Tabs
      selectedIndex={selectedIndex}
      onChange={handleChange}
      items={[
        "Tab",
        <PolygonCircleFilledIcon fontSize={20} color="#8247E5" />,
        "Tab",
      ]}
    />
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("Tabs 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Tabs").should("be.visible");
  });

  it("Tabs 컴포넌트는 'Tabs' 클래스명을 갖습니다.", () => {
    cy.get(".Tabs").should("have.class", "Tabs");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Example
        icon={<PolygonCircleFilledIcon fontSize={20} color="#8247E5" />}
        defaultIndex={1}
      />
    );
  });
  it("첫 디폴트 인덱스틑 1입니다.", () => {
    cy.get(".tab").eq(1).should("have.css", "border-color", "rgb(0, 0, 0)");
    cy.get(".tab").eq(1).should("have.css", "border-style", "solid");
  });
  it("두번째 탭들은 PolygonCircleFilledIcon 아이콘을 있습니다.", () => {
    cy.get(".tab").eq(1).find("svg");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });
  it("세번째 탭을 클릭하면 액티브됩니다.", () => {
    cy.get(".tab").eq(2).click();
    cy.get(".tab").eq(2).should("have.css", "border-color", "rgb(0, 0, 0)");
    cy.get(".tab").eq(2).should("have.css", "border-style", "solid");
  });
});
