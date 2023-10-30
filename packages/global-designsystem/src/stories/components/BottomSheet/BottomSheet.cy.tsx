import { mount } from "@cypress/react";
import { CheckCircleOutlinedIcon } from "@lookatourdesignsystem/icons-library";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { TypoVariant } from "src/types";
import { BottomSheet } from ".";
import { appendRootChild } from "@lookatourdesignsystem/utils-library";
import { Button } from "../Button";

const ModalRoot = () => {
  useEffect(() => {
    ["modal-root"].forEach((id) => appendRootChild(id));
  }, []);
  return null;
};

const Example = ({
  icon,
  fixBottom,
  fixTop,
  title,
  titleVariant,
}: {
  icon?: ReactNode;
  fixBottom?: ReactNode;
  fixTop?: ReactNode;
  title?: string;
  titleVariant?: TypoVariant;
}) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  return (
    <Fragment>
      <Button
        onClick={() => {
          setShowBottomSheet(true);
        }}
      >
        show BottomSheet
      </Button>
      <BottomSheet
        open={showBottomSheet}
        onClose={() => {
          setShowBottomSheet(false);
        }}
        icon={icon}
        fixBottom={fixBottom}
        fixTop={fixTop}
        title={title}
        titleVariant={titleVariant}
      >
        children
      </BottomSheet>
    </Fragment>
  );
};

describe("Mounting a Component", () => {
  before(() => {
    mount(<ModalRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
    cy.get(".Button").click();
  });

  it("BottomSheet 오픈하기 위한 버튼이 있습니다.", () => {
    cy.get(".Button").should("be.exist");
  });

  it("modal-root 엘리먼트 내에 BottomSheet 컴포넌트가 렌더링됩니다.", () => {
    cy.get("#modal-root").children(".BottomSheet").should("be.exist");
  });

  it("오픈된 모달은 'BottomSheet' 클래스명을 갖습니다.", () => {
    cy.get(".BottomSheet").should("have.class", "BottomSheet");
  });

  it("BottomSheet 뒤에는 Backdrop 컴포넌트가 있습니다.", () => {
    cy.get(".Backdrop").should("be.exist");
  });

  it("BottomSheetContent 컴포넌트가 BottomSheet 안에 있습니다.", () => {
    cy.get(".BottomSheetContent").should("be.visible");
  });

  it("BottomSheet 닫을 수 있는 close 버튼이 모달 안에 있습니다.", () => {
    cy.get(".BottomSheetCloseButton").should("be.exist");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <Example
        fixTop={<p>fixTop</p>}
        fixBottom={<p>fixBottom</p>}
        icon={<CheckCircleOutlinedIcon />}
        title="타이틀"
        titleVariant="h1"
      />
    );
    cy.get(".Button").click();
  });

  it("BottomSheetFixBottom 영역이 BottomSheet에 보입니다.", () => {
    cy.get(".BottomSheetFixBottom").should("be.exist");
  });

  it("BottomSheetFixTop 영역이 BottomSheet에 보입니다.", () => {
    cy.get(".BottomSheetFixTop").should("be.exist");
  });

  it("title은 '타이틀'입니다.", () => {
    cy.get(".BottomSheetHeader .Typography").should("have.text", "타이틀");
  });

  it("title은 h1태그로 되어있습니다.", () => {
    cy.get(".BottomSheetHeader h1.Typography").should("be.exist");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
    cy.get(".Button").click();
  });

  it("BottomSheetCloseButton버튼을 클릭하면 BottomSheet이 내려갑니다.", () => {
    cy.get(".BottomSheetCloseButton").click();
    cy.get(".BottomSheet").should("not.be.visible");
  });

  it("BottomSheetCloseButton버튼을 클릭하면 Backdrop 컴포넌트가 사라집니다.", () => {
    cy.get(".BottomSheetCloseButton").click();
    cy.get(".Backdrop").should("not.be.exist");
  });
});
