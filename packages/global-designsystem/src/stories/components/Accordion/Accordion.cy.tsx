import { mount } from "@cypress/react";
import { AddFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Fragment } from "react";
import { Accordion } from ".";

const Example = () => {
  return (
    <Fragment>
      {[
        {
          summary: <strong>How can I be whitelisted?</strong>,
          details: <div>Lorem ipsum dolor sit amet, consectetur a.</div>,
          initialExpanded: true,
        },
        {
          summary: <strong>How can I be whitelisted?</strong>,
          details: <div>mod tempor incididunt.</div>,
        },
        {
          summary: <strong>How can I be whitelisted?</strong>,
          details: (
            <div>
              <ul>
                <li>ullamco laboris nisi u</li>
                <li>irure dolor in</li>
                <li>cillum dolore eu fugiat nulla pariatur</li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </li>
              </ul>
            </div>
          ),
        },
      ].map((item, i) => {
        return (
          <Accordion
            onChange={undefined}
            key={i}
            item={{
              summary: item.summary,
              details: item.details,
              initialExpanded: item.initialExpanded,
            }}
            selectiveIcon={() => <AddFilledIcon />}
            iconStyle={`
                animation: none;
              `}
            icon={undefined}
          />
        );
      })}
    </Fragment>
  );
};
describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("Accordion 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".Accordion").should("be.exist");
  });

  it("Accordion 컴포넌트는 'Accordion' 클래스명을 갖습니다.", () => {
    cy.get(".Accordion").should("have.class", "Accordion");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("Accordion에 첫번째 항목이 열려있습니다.", () => {
    cy.get(".AccordionDetails").eq(0).should("be.visible");
  });

  it("항목마다 AddFilledIcon 아이콘을 갖습니다.", () => {
    cy.get(".AccordionSummaryIcon")
      .eq(0)
      .find("svg")
      .should("have.attr", "title", "AddFilledIcon");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("첫번째 항목의 Summary영역을 클릭하면 해당 Details가 닫힙니다.", () => {
    cy.get(".AccordionSummary").eq(0).click();
    cy.get(".AccordionDetails").eq(0).should("not.be.visible");
  });

  it("두번째 항목의 Summary영역을 클릭하면 해당 Details가 열립니다.", () => {
    cy.get(".AccordionSummary").eq(1).click();
    cy.get(".AccordionDetails").eq(1).should("be.visible");
  });

  it("세번째 항목의 Summary영역을 클릭하면 해당 Details가 열립니다.", () => {
    cy.get(".AccordionSummary").eq(2).click();
    cy.get(".AccordionDetails").eq(2).should("be.visible");
  });
});
