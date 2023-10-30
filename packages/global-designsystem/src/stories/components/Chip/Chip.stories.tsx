import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment } from "react";
import { Chip } from ".";
import {
  CheckCircleFilledIcon,
  CloseFilledIcon,
} from "@lookatourdesignsystem/icons-library";
import { chipDesc } from "src/stories/docs/chip";
import { useTheme } from "src/hooks/useTheme";
import { Stack } from "../Stack";

export default {
  title: "Action/Chip",
  component: Chip,
  args: {
    type: "solid",
    color: "default",
    size: "m",
    label: "Chip",
    selected: false,
    disabled: false,
  },
  ...chipDesc,
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />;
};

export const State: ComponentStory<typeof Chip> = (arg) => {
  return (
    <Fragment>
      <Chip {...arg} label="Chip" />
      <Chip {...arg} selected label="Chip" />
      <Chip {...arg} disabled label="Chip" />
    </Fragment>
  );
};
State.parameters = {
  docs: {
    description: {
      story: `Chip에는 ( normal / selected / disabled ) 상태가 있습니다.`,
    },
  },
  options: { showPanel: true },
};

export const WithIcon: ComponentStory<typeof Chip> = (args) => {
  const theme = useTheme();
  return (
    <Stack direction="row">
      <Chip
        {...args}
        leftIcon={
          <CheckCircleFilledIcon color={theme.colors.gray[0]} fontSize={14} />
        }
      />
      <Chip
        {...args}
        rightIcon={
          <CloseFilledIcon color={theme.colors.gray[0]} fontSize={14} />
        }
      />
    </Stack>
  );
};
WithIcon.parameters = {
  docs: {
    description: {
      story:
        "leftIcon과 rightIcon은 Icon Library의 Icon을 선택하여 사용할 수 있습니다.",
    },
  },
  options: { showPanel: true },
};
