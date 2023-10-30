import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment, useCallback } from "react";
import { Textarea } from ".";
import { useTextarea } from "../../../hooks/components";
import { Button } from "../Button";
import { Typography } from "src/stories/foundation/Typography";
import { textareaDesc } from "src/stories/docs/textarea";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
  args: {
    id: "reference",
    inputMode: "text",
    label: "Label",
    helperText: "Helper Text",
    textAlign: "left",
    height: "128px",
    placeHolder: "Placeholder",
    readonly: false,
  },
  ...textareaDesc,
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const ValidateAndInitialValue: ComponentStory<typeof Textarea> = () => {
  const [textAreaRef, value, onInput, isValid, errorText] = useTextarea({
    initialValue: "start",
    validate: useCallback((value: string) => {
      if (value.length > 10) {
        return {
          isValid: false,
          message: "Text should be less than 10 letters.",
        };
      }

      return {
        isValid: true,
        message: "",
      };
    }, []),
  });

  return (
    <Fragment>
      <Typography>{value}</Typography>
      <Textarea
        id="textarea"
        label="label"
        onInput={onInput}
        state={!isValid ? "error" : undefined}
        helperText={errorText}
        textAreaRef={textAreaRef}
      />
    </Fragment>
  );
};
ValidateAndInitialValue.parameters = {
  controls: { exclude: ["value"] },
  docs: {
    description: {
      story:
        "useTextField hook을 사용해 initialValue, validate으로 문장 입력값을 제한할 수 있습니다.",
    },
  },
  options: { showPanel: false },
};

export const SetValueOneTime: ComponentStory<typeof Textarea> = () => {
  const [textAreaRef, value, onInput, isValid, errorText] = useTextarea();

  return (
    <Fragment>
      <Typography>{value}</Typography>
      <Textarea
        id="textarea"
        label="label"
        onInput={onInput}
        state={!isValid ? "error" : undefined}
        helperText={errorText}
        textAreaRef={textAreaRef}
      />
      <Button
        onClick={() => {
          onInput("Hello");
        }}
      >
        Click to set "Hello"
      </Button>
    </Fragment>
  );
};
SetValueOneTime.parameters = {
  docs: {
    description: {
      story:
        "타이핑이 아닌 한번에 입력되게 하려면 hook의 두번째 함수의 인자로 원하는 값을 넘깁니다. 아래의 경우 버튼을 클릭하면 “Hello”이란 값이 한번에 입력됩니다.",
    },
  },
  options: { showPanel: false },
};
