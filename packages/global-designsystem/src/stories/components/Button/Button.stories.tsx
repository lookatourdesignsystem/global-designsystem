import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import {
  ChevronLargeLeftOutlinedIcon,
  ChevronLargeRightOutlinedIcon,
  InformationOutlinedIcon,
} from "@lookatourdesignsystem/icons-library";
import { buttonDesc } from "src/stories/docs/button";
import { Badge } from "../Badge";

export default {
  title: "Action/Button",
  component: Button,
  args: {
    color: "primary",
    type: "button",
    size: "m",
    icon: false,
    selected: false,
    disabled: false,
    block: false,
    isLoading: false,
    borderRadius: "200",
    variant: "solid",
  },
  ...buttonDesc,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const State: ComponentStory<typeof Button> = (args) => (
  <Stack alignItems="center" direction="row" spacing="200">
    <Button {...args}>Normal</Button>
    <Button {...args} selected>
      Selected
    </Button>
    <Button {...args} disabled>
      Disabled
    </Button>
    <Button {...args} isLoading>
      isLoading
    </Button>
  </Stack>
);
State.parameters = {
  docs: {
    description: {
      story:
        "기본적으로 6가지의 상태를 제공합니다. hover 상태는 hover가 가능한 디바이스에서만 사용됩니다.",
    },
  },
  options: { showPanel: true },
};

export const LeftIconAndRightIcon: ComponentStory<typeof Button> = (args) => (
  <Stack alignItems="center" direction="row" spacing="200">
    <Button {...args} leftIcon={<ChevronLargeLeftOutlinedIcon />}>
      leftIcon
    </Button>
    <Button {...args} rightIcon={<ChevronLargeRightOutlinedIcon />}>
      rightIcon
    </Button>
  </Stack>
);
LeftIconAndRightIcon.parameters = {
  docs: {
    description: {
      story:
        "Icon을 결합하여 함께 사용할 경우 leftIcon, rightIcon 포지션 별로 아이콘을 배치할 수 있습니다. 아이콘은 Icon Library의 Icon을 선택하여 사용할 수 있습니다.",
    },
  },
  options: { showPanel: true },
};
export const WithBadgeAndIcon: ComponentStory<typeof Button> = (args) => (
  <Badge value={20}>
    <Button {...args} icon>
      <InformationOutlinedIcon />
    </Button>
  </Badge>
);
WithBadgeAndIcon.parameters = {
  docs: {
    description: {
      story: `Badge, Icon 과 결합하여 사용가능합니다.  아이콘은 Icon Library의 Icon을 선택하여 사용할 수 있습니다.`,
    },
  },
  options: { showPanel: true },
};
