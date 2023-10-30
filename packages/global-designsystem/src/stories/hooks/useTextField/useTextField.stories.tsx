import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment } from "react";
import { TextField } from "src/stories/components/TextField";
import { Typography } from "src/stories/foundation/Typography";
import { useTextField } from "src/hooks/components";
import { useTextFieldDesc } from "src/stories/docs/useTextField";

export default {
  title: "Hooks/useTextField",
  ...useTextFieldDesc,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = () => {
  const [value, onChangeInput, isValid, errorText] = useTextField({
    initialValue: "initialValue",
    validate: (value: string) => {
      if (value.length < 5) {
        return {
          isValid: false,
          message: "Error! Please insert letters over 5",
        };
      }
      return {
        isValid: true,
        message: "Good",
      };
    },
    format: (value: string) => value.replace(/[0-9]/g, ""),
  });

  return (
    <Fragment>
      <TextField
        id="textField"
        type="text"
        value={value}
        onChange={onChangeInput}
        state={!isValid ? "error" : undefined}
        placeHolder="Enter text"
        label="Label"
        helperText={!isValid ? errorText : "helperText"}
      />
      <Typography>Characters count: {String(value).length}</Typography>
    </Fragment>
  );
};
