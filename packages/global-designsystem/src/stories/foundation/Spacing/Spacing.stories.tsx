import { Story } from "@storybook/react";
import { Fragment } from "react";
import { Box } from "src/stories/components/Box";
import styled from "@emotion/styled";
import { Stack } from "src/stories/components/Stack";
import { Spacer } from "src/stories/components/Spacer";
import { Typography } from "../Typography";
import { useSpacingDesc } from "src/stories/docs/spacing";

export default {
  title: "Foundation/Spacing",
  ...useSpacingDesc,
};

const StyledSpacer = styled(Spacer)`
  background: #209d41;
  display: inline-block;
`;

const Template: Story = () => {
  return (
    <Fragment>
      <div>
        <StyledSpacer x="50" y="50" />
        <Typography variant="caption2">spacing-50 2px</Typography>
      </div>
      <div>
        <StyledSpacer x="100" y="100" />
        <Typography variant="caption2">spacing-100 4px</Typography>
      </div>
      <div>
        <StyledSpacer x="200" y="200" />
        <Typography variant="caption2">spacing-200 8px</Typography>
      </div>
      <div>
        <StyledSpacer x="300" y="300" />
        <Typography variant="caption2">spacing-300 12px</Typography>
      </div>
      <div>
        <StyledSpacer x="400" y="400" />
        <Typography variant="caption2">spacing-400 16px</Typography>
      </div>
      <div>
        <StyledSpacer x="500" y="500" />
        <Typography variant="caption2">spacing-500 20px</Typography>
      </div>
      <div>
        <StyledSpacer x="600" y="600" />
        <Typography variant="caption2">spacing-600 24px</Typography>
      </div>
      <div>
        <StyledSpacer x="700" y="700" />
        <Typography variant="caption2">spacing-700 28px</Typography>
      </div>
      <div>
        <StyledSpacer x="800" y="800" />
        <Typography variant="caption2">spacing-800 32px</Typography>
      </div>
      <div>
        <StyledSpacer x="900" y="900" />
        <Typography variant="caption2">spacing-900 36px</Typography>
      </div>
      <div>
        <StyledSpacer x="1000" y="1000" />
        <Typography variant="caption2">spacing-1000 40px</Typography>
      </div>
      <div>
        <StyledSpacer x="1100" y="1100" />
        <Typography variant="caption2">spacing-1100 44px</Typography>
      </div>
      <div>
        <StyledSpacer x="1200" y="1200" />
        <Typography variant="caption2">spacing-1200 48px</Typography>
      </div>
      <div>
        <StyledSpacer x="1300" y="1300" />
        <Typography variant="caption2">spacing-1300 52px</Typography>
      </div>
      <div>
        <StyledSpacer x="1400" y="1400" />
        <Typography variant="caption2">spacing-1400 56px</Typography>
      </div>
      <div>
        <StyledSpacer x="1500" y="1500" />
        <Typography variant="caption2">spacing-1500 60px</Typography>
      </div>
      <div>
        <StyledSpacer x="1600" y="1600" />
        <Typography variant="caption2">spacing-1600 64px</Typography>
      </div>
    </Fragment>
  );
};

export const Default = Template.bind({});

export const BoxPadding: Story = () => (
  <Box
    width="200px"
    height="200px"
    background="pink"
    pt="1500"
    pb="1500"
    pr="500"
    pl="500"
    border="1px solid red"
  >
    Box
  </Box>
);
BoxPadding.parameters = {
  docs: {
    description: {
      story: "Box에서 padding관련 prop에서 사용됩니다.",
    },
  },
  options: { showPanel: false },
};
export const StackPadding: Story = () => (
  <Stack
    width="200px"
    height="200px"
    background="orange"
    pt="1500"
    pb="1500"
    pr="500"
    pl="500"
  >
    Stack
  </Stack>
);
StackPadding.parameters = {
  docs: {
    description: {
      story: "Stack에서 padding관련 prop에서 사용됩니다.",
    },
  },
  options: { showPanel: false },
};
