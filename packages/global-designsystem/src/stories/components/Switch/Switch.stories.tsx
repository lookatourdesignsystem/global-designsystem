import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormEvent, Fragment, useState } from "react";
import { Switch } from ".";
import { Typography } from "../../foundation/Typography";
import { FormControlLabel } from "../FormControlLabel";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { switchDesc } from "src/stories/docs/switch";

export default {
  title: "Inputs/Switch",
  component: Switch,
  args: {
    size: "m",
    checked: false,
  },
  ...switchDesc,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => {
  return (
    <Fragment>
      <Typography>Switch checked prop in Controls panel.</Typography>
      <br />
      <FormControlLabel
        htmlFor={args.id}
        control={<Switch {...args} />}
        label="Label"
        alignControl="center"
        variant={
          args.size === "l" ? "body1" : args.size === "s" ? "caption2" : "body2"
        }
      />
      <Typography>checked: {String(args.checked)}</Typography>
    </Fragment>
  );
};

export const Multiple: ComponentStory<typeof Switch> = () => {
  const [result, setResult] = useState({});
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [agreement3, setAgreement3] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      agreement1: { value: string; checked: boolean };
      agreement2: { value: string; checked: boolean };
      agreement3: { value: string; checked: boolean };
    };

    setResult({
      agreement1: formElements.agreement1.checked,
      agreement2: formElements.agreement2.checked,
      agreement3: formElements.agreement3.checked,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e);
      }}
    >
      <Stack spacing="400">
        <FormControlLabel
          htmlFor="agreement1"
          control={
            <Switch
              id="agreement1"
              value="agreement1"
              name="agreement"
              checked={agreement1}
              onChange={(checked, id, value) => {
                setAgreement1(checked);
              }}
            />
          }
          label="agreement1"
          alignControl="center"
        />
        <FormControlLabel
          htmlFor="agreement2"
          control={
            <Switch
              id="agreement2"
              value="agreement2"
              name="agreement"
              checked={agreement2}
              onChange={(checked, id, value) => {
                setAgreement2(checked);
              }}
            />
          }
          label="agreement2"
          alignControl="center"
        />
        <FormControlLabel
          htmlFor="agreement3"
          control={
            <Switch
              id="agreement3"
              value="agreement3"
              name="agreement"
              checked={agreement3}
              onChange={(checked, id, value) => {
                setAgreement3(checked);
              }}
            />
          }
          label="agreement3"
          alignControl="center"
        />
      </Stack>
      <br />
      <Button type="submit">Submit</Button>
      <Typography>
        {Object.keys(result).length !== 0 &&
          `Form Submitted! ${JSON.stringify(result)}`}
      </Typography>
    </form>
  );
};
Multiple.parameters = {
  docs: {
    description: {
      story:
        "Switch는 FormControlLabel와 함께 사용하고 onChange함수에서 checked, id, value를 전달받습니다.",
    },
  },
  options: { showPanel: false },
};
