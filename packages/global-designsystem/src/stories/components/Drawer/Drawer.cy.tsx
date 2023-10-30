import { mount } from "@cypress/react";
import { appendRootChild } from "@lookatourdesignsystem/utils-library";
import { Fragment, useEffect, useState } from "react";
import { Drawer } from ".";

const SidebarRoot = () => {
  useEffect(() => {
    ["sidebar-root"].forEach((id) => appendRootChild(id));
  }, []);
  return null;
};
const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setOpen(true)}>Open</button>
      <Drawer
        onClose={() => setOpen(false)}
        open={open}
        header={<div>header</div>}
        footer={<div>footer</div>}
      >
        <div>children</div>
      </Drawer>
    </Fragment>
  );
};

describe("Mounting a Component", () => {
  before(() => {
    mount(<SidebarRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
  });

  it("Drawer 컴포넌트가 렌더링됩니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").should("be.exist");
  });

  it("Drawer 컴포넌트는 'Drawer' 클래스를 갖습니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").should("have.class", "Drawer");
  });

  it("Drawer 컴포넌트는 너비 300px 만큼 왼쪽에 숨겨져 있습니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, 0, 0)"
    );
  });
});

describe("Passing Props to Components", () => {
  before(() => {
    mount(<SidebarRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
  });
  it("DrawerHeader 영역이 렌더링됩니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").find(".DrawerHeader");
  });
  it("DrawerContent 영역이 렌더링됩니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").find(".DrawerContent");
  });
  it("DrawerFooter 영역이 렌더링됩니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").find(".DrawerFooter");
  });
});

describe("Testing Event Handlers", () => {
  before(() => {
    mount(<SidebarRoot />);
  });
  beforeEach(() => {
    mount(<Example />);
  });

  it("Drawer 컴포넌트가 왼쪽에서 나옵니다.", () => {
    cy.get("button").click();
    cy.get(".Drawer").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, 0, 0)"
    );
  });

  it("Backdrop을 클릭하면 Drawer 컴포넌트가 왼쪽으로 들어갑니다.", () => {
    cy.get("button").click();
    cy.get(".Backdrop").click();
    cy.get(".Drawer").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, -300, 0)"
    );
  });
});
