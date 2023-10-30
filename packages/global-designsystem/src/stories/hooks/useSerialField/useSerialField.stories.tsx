import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback } from "react";
import { useSerialField } from "src/hooks/components";
import { SerialField } from "src/stories/components/SerialField";
import { useSerialFieldDesc } from "src/stories/docs/useSerialField";

export default {
  title: "Hooks/useSerialField",
  ...useSerialFieldDesc,
} as ComponentMeta<typeof SerialField>;

export const Default: ComponentStory<typeof SerialField> = () => {
  const [value, onChangeInput, isValid, errorText] = useSerialField({
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
      value={value}
      onChange={onChangeInput}
      helperText={!isValid ? errorText : ""}
      length={6}
    />
  );
};
