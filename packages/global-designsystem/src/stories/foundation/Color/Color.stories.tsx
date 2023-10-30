import { Story } from "@storybook/react";
import { Fragment } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Stack } from "../../components/Stack";
import { Typography } from "../Typography";
import styled from "@emotion/styled";
import { colorDesc } from "src/stories/docs/color";

export default {
  title: "Foundation/Color",
  ...colorDesc,
};

const StyledDiv = styled.div<{ background: string }>`
  width: 100px;
  height: 100px;
  background: ${({ background }) => background};
`;

const StyledStack = styled(Stack)`
  column-gap: 20px;
  flex-wrap: wrap;
`;

const Template: Story = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Typography variant="h6">background</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.background.elevated} />
          <Typography variant="caption2">background.elevated</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.background.global} />
          <Typography variant="caption2">background.global</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.background.layer1} />
          <Typography variant="caption2">background.layer1</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.background.layer2} />
          <Typography variant="caption2">background.layer2</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.background.primary} />
          <Typography variant="caption2">background.primary</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.background.dim} />
          <Typography variant="caption2">background.dim</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">blank</Typography>
      <Stack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.blank} />
          <Typography variant="caption2">blank</Typography>
        </div>
      </Stack>
      <Typography variant="h6">border</Typography>
      <Stack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.border} />
          <Typography variant="caption2">border</Typography>
        </div>
      </Stack>
      <Typography variant="h6">component</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.component.list.selected} />
          <Typography variant="caption2">component.list.selected</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.component.skeleton.background} />
          <Typography variant="caption2">
            component.skeleton.background
          </Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.component.skeleton.foreground} />
          <Typography variant="caption2">
            component.skeleton.foreground
          </Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">scrollBar</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.scrollBar.active} />
          <Typography variant="caption2">scrollBar.active</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.scrollBar.default} />
          <Typography variant="caption2">scrollBar.default</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.scrollBar.hover} />
          <Typography variant="caption2">scrollBar.hover</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">gray</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.gray[0]} />
          <Typography variant="caption2">gray[0]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[50]} />
          <Typography variant="caption2">gray[50]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[100]} />
          <Typography variant="caption2">gray[100]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[200]} />
          <Typography variant="caption2">gray[200]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[300]} />
          <Typography variant="caption2">gray[300]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[400]} />
          <Typography variant="caption2">gray[400]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[500]} />
          <Typography variant="caption2">gray[500]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[600]} />
          <Typography variant="caption2">gray[600]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[700]} />
          <Typography variant="caption2">gray[700]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[800]} />
          <Typography variant="caption2">gray[800]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[900]} />
          <Typography variant="caption2">gray[900]</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.gray[1000]} />
          <Typography variant="caption2">gray[1000]</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">interactive</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.interactive.active} />
          <Typography variant="caption2">interactive.active</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.interactive.disabled} />
          <Typography variant="caption2">interactive.disabled</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.interactive.hover} />
          <Typography variant="caption2">interactive.hover</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.interactive.pressed1} />
          <Typography variant="caption2">interactive.pressed1</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.interactive.pressed2} />
          <Typography variant="caption2">interactive.pressed2</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">primary</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.primary.darken} />
          <Typography variant="caption2">primary.darken</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.primary.lighten} />
          <Typography variant="caption2">primary.lighten</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.primary.main} />
          <Typography variant="caption2">primary.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.primary.text} />
          <Typography variant="caption2">primary.text</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">secondary</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.secondary.darken} />
          <Typography variant="caption2">secondary.darken</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.secondary.lighten} />
          <Typography variant="caption2">secondary.lighten</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.secondary.main} />
          <Typography variant="caption2">secondary.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.secondary.text} />
          <Typography variant="caption2">secondary.text</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">system</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.system.error.main} />
          <Typography variant="caption2">system.error.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.error.text} />
          <Typography variant="caption2">system.error.text</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.info.main} />
          <Typography variant="caption2">system.info.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.info.text} />
          <Typography variant="caption2">system.info.text</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.success.main} />
          <Typography variant="caption2">system.success.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.success.text} />
          <Typography variant="caption2">system.success.text</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.warning.main} />
          <Typography variant="caption2">system.warning.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.system.warning.text} />
          <Typography variant="caption2">system.warning.text</Typography>
        </div>
      </StyledStack>
      <Typography variant="h6">text</Typography>
      <StyledStack direction="row" pb="1000">
        <div>
          <StyledDiv background={theme.colors.text.disabled} />
          <Typography variant="caption2">text.disabled</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.text.low} />
          <Typography variant="caption2">text.low</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.text.main} />
          <Typography variant="caption2">text.main</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.text.sub} />
          <Typography variant="caption2">text.sub</Typography>
        </div>
        <div>
          <StyledDiv background={theme.colors.text.verylow} />
          <Typography variant="caption2">text.verylow</Typography>
        </div>
      </StyledStack>
    </Fragment>
  );
};

export const Normal = Template.bind({});
Normal.args = { ...Template.args };
