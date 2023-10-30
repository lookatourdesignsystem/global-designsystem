import { mount } from "@cypress/react";
import styled from "@emotion/styled";
import { VisibilityFilledIcon } from "@lookatourdesignsystem/icons-library";
import { useTextField } from "src/hooks/components";
import { TextField } from ".";

const Example = () => {
  const [inputText, onChangeInputText] = useTextField();
  return (
    <TextField
      id={""}
      type="text"
      value={inputText}
      onChange={onChangeInputText}
    />
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<TextField id={""} type="text" />);
  });

  it("TextField 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".TextField").should("be.visible");
  });

  it("TextField 'TextField' 클래스명을 갖습니다.", () => {
    cy.get(".TextField").should("have.class", "TextField");
  });

  it("기본 테두리 색은 #dddddd 입니다.", () => {
    cy.get(".TextField").should(
      "have.css",
      "border-color",
      "rgb(221, 221, 221)"
    );
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(
      <TextField
        id={""}
        type="text"
        label="라벨"
        helperText="헬퍼텍스트"
        state="success"
        asset={<VisibilityFilledIcon />}
      />
    );
  });

  it("TextFieldLabel '라벨'이 보입니다.", () => {
    cy.get(".TextFieldLabel").should("have.text", "라벨");
  });

  it("TextFieldHelperText '헬퍼텍스트'가 보입니다.", () => {
    cy.get(".TextFieldHelperText").should("have.text", "헬퍼텍스트");
  });

  it("border-color는 success 색 입니다.", () => {
    cy.get(".TextField").should("have.css", "border-color", "rgb(76, 175, 80)");
  });

  it("우측에 VisibilityFilledIcon아이콘이 있습니다.", () => {
    cy.get(".TextField")
      .next()
      .find("svg")
      .should("have.attr", "title", "VisibilityFilledIcon");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("'테스트입니다'입력하면 TextField의 value로 들어갑니다.", () => {
    cy.get(".TextField").type("테스트입니다");
    cy.get(".TextField").should("have.attr", "value", "테스트입니다");
  });
});
