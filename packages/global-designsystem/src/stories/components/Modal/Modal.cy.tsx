import { mount } from "@cypress/react";
import { useEffect, useState } from "react";
import { useContainerModal } from "../../../hooks/components/useContainerModal";
import { ContainerModalProvider } from "../../../providers/ContainerModal";
import { appendRootChild } from "@lookatourdesignsystem/utils-library";
import { Button } from "../Button";
import Modal1 from "./modals/Modal1";

const ModalRoot = () => {
  useEffect(() => {
    ["modal-root"].forEach((id) => appendRootChild(id));
  }, []);
  return null;
};

const Example = () => {
  const [items, setItems] = useState(["item0"]);
  const [value, setValue] = useState(false);
  const { open, close } = useContainerModal({ id: "Modal1", keys: { items } });
  const updateItems = () => {
    setItems((item) => item.concat(`item${item.length}`));
  };

  const toggleValue = () => {
    setValue((prev) => !prev);
  };
  return (
    <Button
      size="s"
      color="primary"
      onClick={() => {
        open(
          <Modal1
            items={items}
            updateItems={updateItems}
            toggleValue={toggleValue}
            value={value}
            onClose={close}
          />
        );
      }}
    >
      Show Modal Button
    </Button>
  );
};

describe("Mounting a Component", () => {
  before(() => {
    mount(<ModalRoot />);
  });
  beforeEach(() => {
    mount(
      <ContainerModalProvider>
        <Example />
      </ContainerModalProvider>
    );
    cy.get(".Button").click();
  });

  it("모달 오픈하기 위한 버튼이 있습니다.", () => {
    cy.get(".Button").should("be.exist");
  });

  it("modal-root 엘리먼트 내에 Backdrop 컴포넌트가 렌더링됩니다.", () => {
    cy.get("#modal-root").children(".Modal").should("be.exist");
  });

  it("오픈된 모달은 'Modal' 클래스명을 갖습니다.", () => {
    cy.get(".Modal").should("have.class", "Modal");
  });

  it("모달 뒤에는 Backdrop 컴포넌트가 있습니다.", () => {
    cy.get(".Backdrop").should("be.exist");
  });

  it("ModalHeader 컴포넌트가 모달 안에 있습니다.", () => {
    cy.get(".ModalHeader").should("be.visible");
  });

  it("모달을 닫을 수 있는 close 버튼이 모달 안에 있습니다.", () => {
    cy.get(".ModalCloseButton").should("be.exist");
  });

  it("모달 헤더에 있는 타이틀은 h6 태그로 되어있습니다.", () => {
    cy.get(".ModalHeader h6").should("be.exist");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <ContainerModalProvider>
        <Example />
      </ContainerModalProvider>
    );
    cy.get(".Button").click();
  });

  it("ModalFixTop 영역이 모달에 보입니다.", () => {
    cy.get(".ModalFixTop").should("be.visible");
  });

  it("ModalContent 영역이 모달에 보입니다.", () => {
    cy.get(".ModalContent").should("be.visible");
  });

  it("ModalFixBottom 영역이 모달에 보입니다.", () => {
    cy.get(".ModalFixBottom").should("be.visible");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(
      <ContainerModalProvider>
        <Example />
      </ContainerModalProvider>
    );
    cy.get(".Button").click();
  });

  it("close 버튼을 클릭하면 모달이 닫힙니다.", () => {
    cy.get(".ModalCloseButton").click();
    cy.get(".Backdrop").should("not.exist");
  });
});
