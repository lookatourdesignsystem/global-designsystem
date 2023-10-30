import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { TextField } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Button } from "../Button";
import { useNumberField, useTextField } from "../../../hooks/components";
import { VisibilityFilledIcon } from "@lookatourdesignsystem/icons-library";
import { textfieldDesc } from "src/stories/docs/textfield";

export default {
  title: "Inputs/TextField",
  component: TextField,
  args: {
    id: "id",
    type: "text",
    inputMode: "text",
    label: "Label",
    disabled: false,
    helperText: "Helper Text",
    textAlign: "left",
    assetPosition: "right",
    required: false,
    size: "m",
    autocomplete: "off",
    placeHolder: "Placeholder",
  },
  ...textfieldDesc,
} as ComponentMeta<typeof TextField>;
export const Default: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const SetValueUsingUseTextField: ComponentStory<
  typeof TextField
> = () => {
  const theme = useTheme();
  const [inputText, onChangeInputText] = useNumberField();

  return (
    <Fragment>
      <TextField
        id="textField"
        type="text"
        value={inputText}
        onChange={onChangeInputText}
        asset={
          <Typography variant="subtitle1" color={theme.colors.gray[400]}>
            USD
          </Typography>
        }
      />
      <Button
        onClick={() => {
          onChangeInputText(1000);
        }}
      >
        set value to 1000
      </Button>
    </Fragment>
  );
};
SetValueUsingUseTextField.parameters = {
  docs: {
    description: {
      story:
        "타이핑이 아닌 한번에 입력되게 하려면 hook의 두번째 함수의 인자로 원하는 값을 넘깁니다. 아래의 경우 버튼을 클릭하면 “1000”이란 값이 한번에 입력됩니다.",
    },
  },
  options: { showPanel: false },
};

export const Asset: ComponentStory<typeof TextField> = (args) => {
  const theme = useTheme();
  return (
    <Fragment>
      <TextField
        {...args}
        id="basic"
        type="text"
        value={args.value}
        placeHolder="basic"
      />
      <TextField
        {...args}
        id="unit"
        type="number"
        value={args.value}
        placeHolder="unit"
        asset={
          <Typography variant="subtitle1" color={theme.colors.gray[400]}>
            USD
          </Typography>
        }
      />
      <TextField
        {...args}
        id="button"
        type="text"
        value={args.value}
        placeHolder="button"
        asset={
          <Button size="s" variant="outlined" color="default">
            button
          </Button>
        }
      />
      <TextField
        {...args}
        id="icon"
        type="text"
        value={args.value}
        placeHolder="icon"
        asset={
          <VisibilityFilledIcon
            fontSize={24}
            color={theme.colors.text.verylow}
          />
        }
      />
      <TextField
        {...args}
        id="timer"
        type="text"
        value={args.value}
        placeHolder="timer"
        asset={<Typography variant="body1">05:00</Typography>}
      />
    </Fragment>
  );
};
Asset.parameters = {
  docs: {
    description: {
      story:
        "TextField 내에 입력값 외에 다른 어셋을 배치하고 싶을 때 asset prop을 사용합니다.",
    },
  },
  options: { showPanel: true },
};

export const PatternWithUseTextField: ComponentStory<typeof TextField> = () => {
  const [inputText, onChangeInputText] = useTextField();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        id="textField"
        type="text"
        label="Country code"
        value={inputText}
        onChange={onChangeInputText}
        pattern="[A-Za-z]{3}"
        helperText="Enter three consecutive characters in English."
      />
      <Button type="submit">submit</Button>
    </form>
  );
};
PatternWithUseTextField.parameters = {
  docs: {
    description: {
      story:
        "form태그와 함께 submit할 때 pattern와 형식이 맞지 않으면 브라우저별 시스템 안내 툴팁을 제공해줍니다.",
    },
  },
  options: { showPanel: false },
};
