import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";
import { FormControlLabel } from ".";
import { Radio } from "../Radio";
import { formControlLabelDesc } from "src/stories/docs/formControlLabel";
import { Typography } from "src/stories/foundation/Typography";

export default {
  title: "Util/FormControlLabel",
  component: FormControlLabel,
  args: {
    label: "banana",
    labelPlacement: "end",
    alignControl: "center",
    checked: false,
    disabled: false,
    variant: "body1",
    control: (
      <Radio
        id="banana"
        value="banana"
        name="fruits"
        onChange={(checked, id, value) => {}}
      />
    ),
  },
  ...formControlLabelDesc,
} as ComponentMeta<typeof FormControlLabel>;

export const Default: ComponentStory<typeof FormControlLabel> = (args) => {
  return (
    <fieldset>
      <Typography>Switch checked prop in Controls panel.</Typography>
      <FormControlLabel {...args} />
    </fieldset>
  );
};

export const WithAction: ComponentStory<typeof FormControlLabel> = () => {
  const [value, setValue] = useState<String>("");

  return (
    <fieldset>
      <FormControlLabel
        control={
          <Radio
            id="banana"
            value="banana"
            name="fruits"
            onChange={(checked, id, value) => {
              setValue(value);
            }}
          />
        }
        label="banana"
        checked={value === "banana"}
        value="banana"
      />
    </fieldset>
  );
};
WithAction.parameters = {
  docs: {
    description: {
      story: "useState와 onChange함수로 실제 구현될 수 있습니다.",
    },
  },
  options: { showPanel: false },
};
