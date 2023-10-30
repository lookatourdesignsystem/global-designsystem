import { mount } from "@cypress/react";
import { useCallback } from "react";
import { useSerialField } from "src/hooks/components";
import { SerialFieldLength, SerialFieldState } from "../../../types";
import { SerialField } from ".";

const Example = ({
  masking,
  length = 6,
  state,
}: {
  masking?: boolean;
  length?: SerialFieldLength;
  state?: SerialFieldState;
}) => {
  const [serial, onChangeSerialInput, isValidSerial, errorTextSerial] =
    useSerialField({
      validate: useCallback((value: string) => {
        if (value.length > 0 && value.length < 6) {
          return { isValid: false, message: "Number should be 6 digits." };
        }

        return {
          isValid: true,
          message: "",
        };
      }, []),
    });

  return (
    <SerialField
      value={serial}
      onChange={onChangeSerialInput}
      helperText={errorTextSerial}
      length={length}
      masking={masking}
      state={state}
    />
  );
};

describe("Mounting a Component", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("SerialField 컴포넌트가 렌더링됩니다.", () => {
    cy.get(".SerialField").should("be.exist");
  });

  it("SerialField 컴포넌트는 'SerialField' 클래스를 갖습니다.", () => {
    cy.get(".SerialField").should("have.class", "SerialField");
  });

  it("SerialField 컴포넌트의 필드 수는 기본 6개입니다.", () => {
    cy.get(".SerialField > div").find("div").should("have.length", 6);
  });
});

describe("Passing Props to Components", () => {
  beforeEach(() => {
    mount(<Example masking={true} length={5} state="success" />);
  });

  it("masking이 true일 경우 숫자가 마스킹으로된 상태로 보입니다.", () => {
    cy.get(".SerialField").type("123");
    cy.get(".SerialField > div > div").eq(0).find("div span");
  });

  it("SerialField 컴포넌트의 필드 수는 5개입니다.", () => {
    cy.get(".SerialField > div").find("div").should("have.length", 5);
  });

  it("state가 'success'상태이면 필드 색은 #4caf50 입니다.", () => {
    cy.get(".SerialField > div > div")
      .eq(0)
      .should("have.css", "border", "1px solid rgb(76, 175, 80)");
  });
});

describe("Testing Event Handlers", () => {
  beforeEach(() => {
    mount(<Example />);
  });

  it("숫자를 적게 입력하면 errorText가 뜹니다.", () => {
    cy.get(".SerialField").type("123");
    cy.get(".SerialField > span").should(
      "have.text",
      "Number should be 6 digits."
    );
  });

  it("숫자를 6자리 다 입력하면 errorText가 없어집니다.", () => {
    cy.get(".SerialField").type("123456");
    cy.get(".SerialField > span").should("not.exist");
  });

  it("숫자를 6자리 이상을 입력하면 앞에 6개만 보입니다.", () => {
    cy.get(".SerialField").type("12345689");
    cy.get(".SerialField input").should("have.attr", "value", "123456");
  });

  it("1234 입력 후 backspace 누르면 123가 됩니다.", () => {
    cy.get(".SerialField").type("1234");
    cy.get(".SerialField").type("{backspace}");
    cy.get(".SerialField input").should("have.attr", "value", "123");
  });
});
