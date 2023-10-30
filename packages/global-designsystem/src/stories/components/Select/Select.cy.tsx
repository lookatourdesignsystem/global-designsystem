import { mount } from "@cypress/react";
import { FundCoinbaseIcon } from "@lookatourdesignsystem/icons-library";
import { useEffect, useState } from "react";
import { ContainerModalProvider } from "src/providers/ContainerModal";
import { Select } from ".";
import { appendRootChild } from "@lookatourdesignsystem/utils-library";

const ModalRoot = () => {
  useEffect(() => {
    ["modal-root"].forEach((id) => appendRootChild(id));
  }, []);
  return null;
};

const Example = ({ placeholder }: { placeholder?: string }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const onSelectMethod = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ContainerModalProvider>
      <Select
        selectedIndex={selectedIndex}
        onSelect={onSelectMethod}
        labelText="라벨"
        helpText="헬퍼"
        placeholder={placeholder}
        items={[
          {
            value: "0",
            label:
              "Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0Coinbase Commerce 0",
            subLabel:
              "descriptiondescriptiondescriptiondesdescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptioncriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
            icon: <FundCoinbaseIcon fontSize={24} />,
          },
          {
            value: "1",
            label: "Coinbase Commerce 1",
            subLabel: "description",
            icon: <FundCoinbaseIcon fontSize={24} />,
          },
          {
            value: "2",
            label: "Coinbase Commerce 2",
            subLabel: "description",
            icon: <FundCoinbaseIcon fontSize={24} />,
          },
        ]}
        id={""}
      />
    </ContainerModalProvider>
  );
};

describe("Mounting a Component", () => {
  before(() => {
    mount(<ModalRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
  });

  it("Select 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Select").should("be.exist");
  });

  it("Select는 'Select' 클래스명을 갖습니다.", () => {
    cy.get(".Select").should("have.class", "Select");
  });
});

describe("Passing Props to Components", () => {
  before(() => {
    mount(<ModalRoot />);
  });
  beforeEach(() => {
    mount(<Example placeholder="placeholder" />);
  });
  it("SelectLabe로 '라벨'이 보입니다.", () => {
    cy.get(".SelectLabel").should("have.text", "라벨");
  });
  it("SelectHelperText로 '헬퍼'가 보입니다.", () => {
    cy.get(".SelectHelperText").should("have.text", "헬퍼");
  });
  it("placeholder가 보입니다.", () => {
    cy.get(".Select .Typography").should("have.text", "placeholder");
  });
});

describe("Testing Event Handlers", () => {
  before(() => {
    mount(<ModalRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
  });

  it("Select를 클릭하면 모달형태로 뜹니다.", () => {
    cy.viewport(1024, 1024);
    cy.get(".Select").click();
    cy.get("#modal-root .Modal").should("be.exist");
  });

  it("600px 너비 이하에서는 Select를 클릭하면 BottomSheet형태로 뜹니다.", () => {
    cy.get(".Select").click();
    cy.get("#modal-root .Modal").should("be.exist");
    cy.get("#modal-root .Modal").should("have.css", "bottom", "0px");
  });

  it("ModalCloseButton버튼을 클릭하면 모달형태의 Select가 닫힙니다.", () => {
    cy.get(".Select").click();
    cy.get(".ModalCloseButton").click();
    cy.get("#modal-root .Modal").should("not.be.exist");
  });

  it("'Coinbase Commerce 1'을 선택합니다.", () => {
    cy.get(".Select").click();
    cy.get(".ModalContent button").eq(1).click();
    cy.get(".Select .Typography").should("have.text", "Coinbase Commerce 1");
  });
});
