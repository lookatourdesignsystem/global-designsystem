import { Typography } from "../../../stories/foundation/Typography";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Divider } from ".";
import { Stack } from "../Stack";
import { dividerDesc } from "src/stories/docs/divider";

export default {
  title: "Layout/Divider",
  component: Divider,
  args: {
    orientation: "horizontal",
    stroke: 1,
  },
  ...dividerDesc,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (args) => {
  return (
    <Stack
      direction={args.orientation === "vertical" ? "row" : "column"}
      alignItems="center"
      spacing="100"
    >
      <Typography variant="subtitle1">text</Typography>
      <Divider {...args} />
      <Typography variant="subtitle1">text</Typography>
      <Divider {...args} />
      <Typography variant="subtitle1">text</Typography>
    </Stack>
  );
};

export const Orientation: ComponentStory<typeof Divider> = () => {
  return (
    <Stack direction="row" alignItems="center" spacing="100">
      <Typography variant="subtitle1">text</Typography>
      <Divider orientation="vertical" length="15px" />
      <Typography variant="subtitle1">text</Typography>
      <Divider orientation="vertical" length="15px" />
      <Typography variant="subtitle1">text</Typography>
    </Stack>
  );
};

Orientation.parameters = {
  docs: {
    description: {
      story:
        "vertical로 정렬하고자 할 경우 Stack의 방향을 바꾸고 orientation=”vertical”로 셋팅하면 됩니다.",
    },
  },
  options: { showPanel: false },
};
