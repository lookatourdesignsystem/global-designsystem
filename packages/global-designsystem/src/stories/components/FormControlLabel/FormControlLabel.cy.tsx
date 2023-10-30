import { mount } from "@cypress/react";
import { ChangeEvent, useState } from "react";
import { LabelAlignControl, LabelPlacement } from "src/types";
import { FormControlLabel } from ".";

const Example = ({
  labelPlacement,
  alignControl,
}: {
  labelPlacement?: LabelPlacement;
  alignControl?: LabelAlignControl;
}) => {
  const [value, setValue] = useState<String>("");

  return (
    <FormControlLabel
      control={
        <input
          type="radio"
          id="banana"
          value="banana"
          name="fruits"
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            setValue(() => ev.target.value);
          }}
        />
      }
      label="banana"
      checked={value === "banana"}
      value="banana"
      labelPlacement={labelPlacement}
      alignControl={alignControl}
    />
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("FormControlLabel 컴포넌트가 렌더링됩니다.", () => {
    cy.get("label").should("be.exist");
  });

  it("FormControlLabel 컴포넌트는 'FormControlLabel' 클래스를 갖습니다.", () => {
    cy.get("label").should("have.class", "FormControlLabel");
  });

  it("FormControlLabel 컴포넌트는 기본 flex-direction 'row' 값을 갖습니다.", () => {
    cy.get("label").should("have.css", "flex-direction", "row");
  });

  it("FormControlLabel 컴포넌트는 기본 align-items 'center' 값을 갖습니다.", () => {
    cy.get("label").should("have.css", "align-items", "center");
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Example labelPlacement={"bottom"} alignControl={"end"} />);
  });
  it("labelPlacement가 'bottom'이면 flex-direction는 'column' 값을 갖습니다.", () => {
    cy.get("label").should("have.css", "flex-direction", "column");
  });

  it("alignControl 'end'이면 align-items는 'flex-end' 값을 갖습니다.", () => {
    cy.get("label").should("have.css", "align-items", "flex-end");
  });
});

describe("Testing Event Handlers", () => {});
