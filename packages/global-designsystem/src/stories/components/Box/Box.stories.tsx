import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from ".";
import { boxDesc } from "src/stories/docs/box";

export default {
  title: "Layout/Box",
  component: Box,
  args: {
    borderRadius: "0",
    width: "200px",
    height: "200px",
    background: "#FFA500",
    p: 0,
    pt: 0,
    pr: 0,
    pb: 0,
    pl: 0,
    as: "div",
  },
  ...boxDesc,
} as ComponentMeta<typeof Box>;

export const Default: ComponentStory<typeof Box> = (args) => {
  return <Box {...args}>Box</Box>;
};

export const As: ComponentStory<typeof Box> = (args) => {
  return (
    <Box {...args} as="span" background="blue">
      Box
    </Box>
  );
};
As.parameters = {
  docs: {
    description: {
      story:
        "Box 기본값은 “div”이나 다른 HTML Element로 지정하고 싶으면 as prop으로 변경가능합니다.",
    },
  },
  options: { showPanel: true },
};
export const Padding: ComponentStory<typeof Box> = (args) => {
  return (
    <Box {...args} p="600" pt="200" background="green">
      Box
    </Box>
  );
};
Padding.parameters = {
  docs: {
    description: {
      story: "방향이 있는 pt, pr, pl, pb가 p를 오버라이드합니다.",
    },
  },
  options: { showPanel: true },
};
