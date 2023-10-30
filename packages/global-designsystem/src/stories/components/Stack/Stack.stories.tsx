import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
import { Stack } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { stackDesc } from "src/stories/docs/stack";

export default {
  title: "Layout/Stack",
  component: Stack,
  args: {
    direction: "column",
    spacing: "500",
    justifyContent: "flex-start",
    alignItems: "normal",
    p: 0,
    pt: 0,
    pr: 0,
    pb: 0,
    pl: 0,
    inline: false,
  },
  ...stackDesc,
} as ComponentMeta<typeof Stack>;

const DefaultTemplate: ComponentStory<typeof Stack> = (args) => {
  const theme = useTheme();

  return (
    <Stack {...args}>
      {[...Array(4)].map((item, i) => (
        <Box
          key={i}
          width="200px"
          height="200px"
          background={theme.colors.primary.main}
        >
          Box {i}
        </Box>
      ))}
    </Stack>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  ...Default.args,
};
