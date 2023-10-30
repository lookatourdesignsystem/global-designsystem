import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from ".";
import { FormEvent, Fragment, useState } from "react";
import { Stack } from "../Stack";
import { FormControlLabel } from "../FormControlLabel";
import { Typography } from "../../foundation/Typography";
import { Button } from "../Button";
import { radioDesc } from "src/stories/docs/radio";

export default {
  title: "Inputs/Radio",
  component: Radio,
  args: {
    size: "m",
    checked: false,
  },
  ...radioDesc,
} as ComponentMeta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = (args) => {
  return (
    <Fragment>
      <Typography>Switch checked prop in Controls panel.</Typography>
      <br />
      <FormControlLabel
        control={<Radio {...args} />}
        label="Label"
        variant={
          args.size === "l" ? "body1" : args.size === "s" ? "caption2" : "body2"
        }
      />
      <Typography>Checked Value: {args.checked}</Typography>
    </Fragment>
  );
};

export const Multiple: ComponentStory<typeof Radio> = () => {
  const [result, setResult] = useState({});
  const [value, setValue] = useState<String>("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      strawberry: { value: string; checked: boolean };
      apple: { value: string; checked: boolean };
      banana: { value: string; checked: boolean };
    };

    setResult({
      strawberry: formElements.strawberry.checked,
      apple: formElements.apple.checked,
      banana: formElements.banana.checked,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e);
      }}
    >
      <Stack direction="column" spacing="500" alignItems="flex-start">
        <FormControlLabel
          control={
            <Radio
              id="strawberry"
              name="fruits"
              value="strawberry"
              size="s"
              checked={value === "strawberry"}
              onChange={(checked, id, value) => {
                setValue(value);
              }}
            />
          }
          label="strawberry (size: s)"
          variant="caption2"
        />
        <FormControlLabel
          control={
            <Radio
              id="apple"
              name="fruits"
              value="apple"
              size="m"
              checked={value === "apple"}
              onChange={(checked, id, value) => {
                setValue(value);
              }}
            />
          }
          label="apple (size: m)"
          variant="body2"
        />
        <FormControlLabel
          control={
            <Radio
              id="banana"
              name="fruits"
              value="banana"
              size="l"
              checked={value === "banana"}
              onChange={(checked, id, value) => {
                setValue(value);
              }}
            />
          }
          label="banana (size: l)"
          variant="body1"
        />
        <Typography>Checked : {value}</Typography>
        <Button type="submit">Submit</Button>
        <Typography>
          {Object.keys(result).length !== 0 &&
            `Form Submitted! ${JSON.stringify(result)}`}
        </Typography>
      </Stack>
    </form>
  );
};
Multiple.parameters = {
  docs: {
    description: {
      story: "onChange핸들러와 useState를 사용해 Radio 상태를 관리합니다.",
    },
  },
  options: { showPanel: false },
};
