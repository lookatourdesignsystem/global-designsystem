import { useEffect, Fragment } from "react";
import { mount } from "@cypress/react";
import { useSnackbar } from "../../../hooks/components/useSnackbar";
import { SnackbarProvider } from "../../../providers/Snackbar";
import { Button } from "../Button";
import { appendRootChild } from "@lookatourdesignsystem/utils-library";

const SnackbarRoot = () => {
  useEffect(() => {
    ["snackbar-root"].forEach((id) => appendRootChild(id));
  }, []);
  return null;
};

const TestSnackbar = () => {
  const { addMessage, clearMessages } = useSnackbar();

  return (
    <Fragment>
      <Button className="addMessage1" onClick={() => addMessage("message1")}>
        Add message1
      </Button>
      <Button className="addMessage2" onClick={() => addMessage("message2")}>
        Add message2
      </Button>
      <Button className="clearMessage" onClick={clearMessages}>
        clear message
      </Button>
    </Fragment>
  );
};

describe("Mounting a Component", () => {
  before(() => {
    mount(<SnackbarRoot />);
  });
  beforeEach(() => {
    mount(
      <SnackbarProvider>
        <TestSnackbar />
      </SnackbarProvider>
    );
    cy.get(".addMessage1").click();
  });

  it("snackbar-root 엘리먼트 내에 Snackbar 컴포넌트가 렌더링됩니다.", () => {
    cy.get("#snackbar-root").children(".Snackbar").should("be.visible");
  });

  it("오픈된 Snackbar는 'Snackbar' 클래스명을 갖습니다.", () => {
    cy.get(".Snackbar").should("have.class", "Snackbar");
  });

  it("Snackbar 메시지로 'message1'가 보입니다.", () => {
    cy.get(".addMessage1").click();
    cy.get(".SnackbarMessage").should("have.text", "message1");
  });
});

describe("Testing Event Handlers", () => {
  before(() => {
    mount(<SnackbarRoot />);
  });
  beforeEach(() => {
    mount(
      <SnackbarProvider>
        <TestSnackbar />
      </SnackbarProvider>
    );
    cy.get(".addMessage1").click();
  });

  it("close 버튼 클릭 후 스낵바가 닫힙니다.", () => {
    cy.get(".SnackbarCloseButton").click();
    cy.wait(3000);
    cy.get(".Snackbar").should("not.exist");
  });

  it("addMessage2 클릭하면 message2가 스낵바에 보입니다.", () => {
    cy.get(".addMessage2").click();
    cy.get(".SnackbarMessage").should("have.text", "message2");
  });

  it("clearMessage 클릭하면 모든 Snackbar는 사라집니다.", () => {
    cy.get(".addMessage2").click();
    cy.get(".Snackbar").should("exist");
    cy.get(".clearMessage").click();
    cy.wait(3000);
    cy.get(".Snackbar").should("not.exist");
  });
});
