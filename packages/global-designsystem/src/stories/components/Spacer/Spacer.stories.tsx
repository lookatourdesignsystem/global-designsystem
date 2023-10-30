import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spacer } from ".";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { css } from "@emotion/react";
import { useTheme } from "src/hooks/useTheme";
import { spacerDesc } from "src/stories/docs/spacer";
import { Typography } from "src/stories/foundation/Typography";
import { Fragment } from "react";

export default {
  title: "Layout/Spacer",
  component: Spacer,
  args: {
    x: "400",
    y: "400",
  },
  ...spacerDesc,
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => {
  return (
    <Fragment>
      <div>
        <Box width="100px" height="100px" background="pink">
          <Typography>Block Box 1</Typography>
        </Box>
        <Spacer {...args} />
        <Box width="100px" height="100px" background="pink">
          <Typography>Block Box 2</Typography>
        </Box>
      </div>
      <div>
        <Box width="100px" height="100px" background="pink" as="span">
          <Typography variant="overline">Inline Box 1</Typography>
        </Box>
        <Spacer {...args} />
        <Box width="100px" height="100px" background="pink" as="span">
          <Typography variant="overline">Inline Box 2</Typography>
        </Box>
      </div>
    </Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
};

export const flexColumn: ComponentStory<typeof Spacer> = (args) => {
  return (
    <Stack height="400px" background="gray">
      <Box width="100px" height="100px" background="pink">
        <Typography>Block Box 1</Typography>
      </Box>
      <Spacer {...args} />
      <Box width="100px" height="100px" background="pink">
        <Typography>Block Box 2</Typography>
      </Box>
    </Stack>
  );
};
flexColumn.parameters = {
  docs: {
    description: {
      story:
        "Stack와 함께 많이 사용하며 Stack의 direction=”column” 일때 Spacer는 주로 y prop을 사용합니다. Spacer에 flexGrow={1}를 하면 Spacer는 가질 수 있는 최대 너비를 가집니다.",
    },
  },
  options: { showPanel: true },
};

export const flexRow: ComponentStory<typeof Spacer> = (args) => {
  return (
    <Stack background="gray" direction="row">
      <Box width="100px" height="100px" background="pink">
        <Typography>Block Box 1</Typography>
      </Box>
      <Spacer {...args} />
      <Box width="100px" height="100px" background="pink">
        <Typography>Block Box 2</Typography>
      </Box>
    </Stack>
  );
};
flexRow.parameters = {
  docs: {
    description: {
      story:
        "Stack와 함께 많이 사용하며 Stack의 direction=”row” 일때 Spacer는 주로 x prop을 사용합니다. Spacer에 flexGrow={1}를 하면 Spacer는 가질 수 있는 최대 너비를 가집니다.",
    },
  },
  options: { showPanel: true },
};

export const PaddingMargin: ComponentStory<typeof Spacer> = () => {
  const theme = useTheme();
  return (
    <Stack background="gray" direction="row">
      <Spacer x="1000" /> {/* ❌ 지양 */}
      <Box width="100px" height="100px" background="pink">
        <Typography>Block Box 1</Typography>
      </Box>
      <Box
        width="100px"
        height="100px"
        background="pink"
        css={css`
          margin-left: ${theme.spacing[1000]}px; // ❕권장
        `}
      >
        <Typography>Block Box 2</Typography>
      </Box>
    </Stack>
  );
};
PaddingMargin.parameters = {
  docs: {
    description: {
      story:
        "Spacer컴포넌트로 간격을 두기보다는 theme.spacing 값을 사용해 margin, padding 스타일하는 걸 권장합니다.",
    },
  },
  options: { showPanel: false },
};
