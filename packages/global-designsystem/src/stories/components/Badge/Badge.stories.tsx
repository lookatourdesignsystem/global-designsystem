import { ComponentMeta } from "@storybook/react";
import { Badge, BadgeProps } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Button } from "../Button";
import { Box } from "../Box";
import { MenuFilledIcon } from "@lookatourdesignsystem/icons-library";
import { badgeDesc } from "src/stories/docs/badge";

export default {
  title: "Data Display/Badge",
  component: Badge,
  args: {
    color: "default",
    horizontal: "right",
    vertical: "top",
    value: 999,
    invisible: false,
    position: "out",
    shape: "square",
    variant: "2unit",
  },
  ...badgeDesc,
} as ComponentMeta<typeof Badge>;

export const Default = (args: BadgeProps) => {
  const tempShape = args.shape === "round" ? "round" : "square";
  return (
    <Badge {...args} shape={tempShape}>
      <Box width="300px" height="300px" background="pink">
        300x300
      </Box>
    </Badge>
  );
};

export const Shape = (args: BadgeProps) => {
  return (
    <Badge {...args} shape="round">
      <Box width="100px" height="100px" background="pink" borderRadius="circle">
        100x100
      </Box>
    </Badge>
  );
};
Shape.parameters = {
  docs: {
    description: {
      story:
        'children이 원형인 경우 shape="round"로 하면 원형 테두리에 맞게 위치합니다.',
    },
  },
  options: { showPanel: true },
};

export const WithButtonAndIcon = (args: BadgeProps) => {
  const theme = useTheme();
  const tempRadius = args.shape === "round" ? "circle" : "200";

  return (
    <Button icon borderRadius={tempRadius}>
      <Badge {...args}>
        <MenuFilledIcon color={theme.colors.gray[1000]} />
      </Badge>
    </Button>
  );
};
WithButtonAndIcon.parameters = {
  docs: {
    description: {
      story: "Button, Icon 과 함께 활용할 수 있습니다.",
    },
  },
  options: { showPanel: true },
};
