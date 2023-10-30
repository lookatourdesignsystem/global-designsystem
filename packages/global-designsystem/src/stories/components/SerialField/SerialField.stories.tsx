import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment, useCallback } from "react";
import { SerialField } from ".";
import { useSerialField } from "../../../hooks/components";
import { serialFieldDesc } from "src/stories/docs/serialField";
import { Typography } from "src/stories/foundation/Typography";

export default {
  title: "Inputs/SerialField",
  component: SerialField,
  args: {
    length: 6,
    maskingDelay: 1000,
    letterRegex: /[^0-9]/g,
    inputMode: "numeric",
    value: "",
  },
  ...serialFieldDesc,
} as ComponentMeta<typeof SerialField>;

const Template: ComponentStory<typeof SerialField> = (args) => {
  return (
    <Fragment>
      <Typography>Insert value prop in Controls panel.</Typography>
      <SerialField {...args} />
    </Fragment>
  );
};

export const Default = Template.bind({});
export const LetterRegex: ComponentStory<typeof SerialField> = () => {
  const [serial, onChangeSerialInput, isValidSerial, errorTextSerial] =
    useSerialField({
      validate: useCallback((value: string) => {
        if (/[^A-Z]/g.test(value) === true) {
          return {
            isValid: false,
            message: "Value should be uppercase letter.",
          };
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
      length={6}
      letterRegex={/[^A-Z]/g}
      state={isValidSerial ? "error" : undefined}
    />
  );
};
LetterRegex.parameters = {
  docs: {
    description: {
      story:
        "onChange할 때 letterRegex 정규식과 맞지 않으면 입력이 되지 않습니다. 아래는 영문 대문자만 입력 가능한 정규식을 적용한 예시입니다.",
    },
  },
  options: { showPanel: false },
};
