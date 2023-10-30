import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment, useCallback } from "react";
import { Typography } from "src/stories/foundation/Typography";
import { Textarea } from "src/stories/components/Textarea";
import { Button } from "src/stories/components/Button";
import { useTextarea } from "src/hooks/components";
import { useTextareaDesc } from "src/stories/docs/useTextarea";

export default {
  title: "Hooks/useTextarea",
  ...useTextareaDesc,
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = () => {
  const [textAreaRef, value, onChangeInput, isValid, errorText] = useTextarea({
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
      <Textarea
        id="textarea"
        label="value"
        required
        onInput={onChangeInput}
        state={!isValid ? "error" : undefined}
        helperText={errorText}
        textAreaRef={textAreaRef}
      />
      <Button
        onClick={() => {
          onChangeInput("Hello");
        }}
      >
        Click to set "Hello"
      </Button>
      <Typography>{value}</Typography>
    </Fragment>
  );
};
