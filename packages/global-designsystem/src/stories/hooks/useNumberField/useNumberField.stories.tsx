import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextField } from "src/stories/components/TextField";
import { useNumberField } from "src/hooks/components";
import NumberFormatter from "src/utils/NumberFormatter";
import { compareNumber } from "src/utils/Validators";
import { useNumberFieldDesc } from "src/stories/docs/useNumberField";

export default {
  title: "Hooks/useNumberField",
  ...useNumberFieldDesc,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = () => {
  const [value, onChangeInput, isValid, errorText] = useNumberField({
    format: (value: string) =>
      NumberFormatter.format(value, { hasComma: true, decimal: 5 }),
    validate: (value: number) => compareNumber(value, "lt", 10000),
  });

  return (
    <TextField
      id="textField"
      type="text"
      value={value}
      onChange={onChangeInput}
      state={!isValid ? "error" : undefined}
      placeHolder="Enter number"
      label="Label"
      helperText={!isValid ? errorText : "helperText"}
    />
  );
};
