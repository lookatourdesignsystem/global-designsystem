import { Fragment, useCallback, useState } from "react";
import { mount } from "@cypress/react";
import { ClickAwayListener } from ".";
import { StyledContainerBox, StyledTooltip } from "./styles";
import { useTheme } from "../../../hooks/useTheme";

const TestClickAwayListener = ({ testClick }: { testClick?: () => void }) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Fragment>
      <div>first line</div>
      <div>second line</div>
      <div className="third">third line</div>
      <ClickAwayListener onClickAway={testClick ? testClick : handleClickAway}>
        <StyledContainerBox>
          <button onClick={handleClick}>Open menu dropdown</button>
          {open ? (
            <StyledTooltip theme={theme} className="Tooltip">
              Click me, I will stay visible until you click outside.
            </StyledTooltip>
          ) : null}
        </StyledContainerBox>
      </ClickAwayListener>
      <div>fourth line</div>
      <div>fifth line</div>
    </Fragment>
  );
};

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<TestClickAwayListener />);
  });

  it("버튼을 클릭하면 툴팁이 보여집니다.", () => {
    cy.get("button").click();
    cy.get(".Tooltip").should("be.visible");
  });

  it("버튼을 다시 클릭하면 툴팁이 사라집니다.", () => {
    cy.get("button").click();
    cy.get(".Tooltip").should("be.visible");
    cy.wait(500);
    cy.get("button").click();
    cy.get(".Tooltip").should("not.exist");
  });

  it("툴팁이 보이는 상태에서 툴팁을 클릭하면 clickAwayHandler 함수가 실행되지 않습니다.", () => {
    const onClick = cy.stub().as("clickAwayHandler");
    mount(<TestClickAwayListener testClick={onClick} />);
    cy.get("button").click();
    cy.wait(500);
    cy.get(".Tooltip").click();
    cy.get("@clickAwayHandler").should("not.have.been.called");
  });

  it("툴팁이 보이는 상태에서 third line을 클릭하면 clickAwayHandler 함수가 실행됩니다.", () => {
    const onClick = cy.stub().as("clickAwayHandler");
    mount(<TestClickAwayListener testClick={onClick} />);
    cy.get("button").click();
    cy.wait(500);
    cy.get(".third").click();
    cy.get("@clickAwayHandler").should("have.been.called");
  });
});
