import { Meta } from "@storybook/react";
import { Typography } from "../../foundation/Typography";
import { useTheme } from "src/hooks/useTheme";
import { Box } from "src/stories/components/Box";
import { css } from "@emotion/react";
import { Fragment } from "react";
import { Grid } from "src/stories/foundation/Grid";
import { useThemeDesc } from "src/stories/docs/useTheme";

const meta: Meta = {
  title: "Hooks/useTheme",
  ...useThemeDesc,
};

export default meta;

export const Default = () => {
  const theme = useTheme();

  return (
    <Typography>
      <pre>{JSON.stringify(theme, undefined, 2)}</pre>
    </Typography>
  );
};

export const Usage = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box
        borderRadius="300"
        background={theme.colors.background.primary}
        css={css`
          cursor: pointer;
          &:hover {
            background-color: ${theme.colors.interactive.hover};
          }
          &:active {
            background-color: ${theme.colors.interactive.active};
          }
        `}
      >
        <Grid container>
          <Grid item>
            <Typography color={theme.colors.system.warning.main}>
              warning
            </Typography>
          </Grid>
          <Grid item>
            <Typography color={theme.colors.text.low}>text</Typography>
          </Grid>
          <Grid item>
            <Typography color={theme.colors.gray[1000]}>gray</Typography>
          </Grid>
        </Grid>
      </Box>
      <div
        css={css`
          background-color: ${theme.colors.background.layer1};
          margin-top: ${theme.spacing[800]}px;
          padding: ${theme.spacing[1000]}px;
          width: ${theme.breakpoints.values.sm}px;
          height: ${theme.breakpoints.values.sm}px;
          font-size: ${theme.typography.fonts.default.variant.h1.fontSize};
        `}
      >
        {theme.breakpoints.values.sm} X {theme.breakpoints.values.sm}
      </div>
    </Fragment>
  );
};
Usage.parameters = {
  docs: {
    description: {
      story: "아래 예시처럼 사용할 수 있습니다.",
    },
  },
};
