import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment } from "react";
import { Grid } from ".";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { Typography } from "../Typography";
import { Box } from "src/stories/components/Box";
import { gridDesc } from "src/stories/docs/grid";

export default {
  title: "Layout/Grid",
  component: Grid,
  ...gridDesc,
} as ComponentMeta<typeof Grid>;

export const Default: ComponentStory<typeof Grid> = (args) => {
  const { calc } = useBreakpoints();
  return (
    <Fragment>
      <Typography>
        repeatCount : {args.repeatCount}
        <br />
        gutter color: {args.background}
        <br />
        breakpoint: {calc.current()}
        <br />
        up("md"): {calc.up("md") ? "true" : "false"}
      </Typography>
      <Grid
        background={args.background}
        container={args.container}
        repeatCount={args.repeatCount}
      >
        <Grid
          item={args.item}
          xs={args.xs}
          sm={args.sm}
          md={args.md}
          lg={args.lg}
          xl={args.xl}
        >
          <Box
            width="100%"
            height="100%"
            background="pink"
            pt="1500"
            pb="1500"
            pr="500"
            pl="500"
            border="1px solid red"
          >
            <Typography>xs=12 sm=6 md=3 lg=2 xl=1</Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Default.args = {
  ...Default.args,
  container: true,
  item: true,
  repeatCount: 12,
  background: "#0000FF",
  xs: 12,
  sm: 6,
  md: 3,
  lg: 2,
  xl: 1,
};

export const Rows: ComponentStory<typeof Grid> = (args) => {
  const { calc } = useBreakpoints();

  return (
    <Fragment>
      <Typography>
        repeatCount : {args.repeatCount}
        <br />
        gutter color: {args.background}
        <br />
        breakpoint: {calc.current()}
        <br />
        up("md"): {calc.up("md") ? "true" : "false"}
      </Typography>
      <Grid
        background={args.background}
        container
        repeatCount={args.repeatCount}
      >
        <Grid xs={12} sm={6} md={6} lg={3} item>
          <Box
            width="100%"
            height="100%"
            background="pink"
            pt="1500"
            pb="1500"
            pr="500"
            pl="500"
            border="1px solid red"
          >
            xs=12 sm=6 md=3 lg=3
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={3} item>
          <Box
            width="100%"
            height="100%"
            background="pink"
            pt="1500"
            pb="1500"
            pr="500"
            pl="500"
            border="1px solid red"
          >
            xs=12 sm=6 md=6 lg=3
          </Box>
        </Grid>
        <Grid xs={6} sm={12} md={8} lg={3} item>
          <Box
            width="100%"
            height="100%"
            background="pink"
            pt="1500"
            pb="1500"
            pr="500"
            pl="500"
            border="1px solid red"
          >
            xs=6 sm=12 md=8 lg=3
          </Box>
        </Grid>
        <Grid xs={6} sm={12} md={2} lg={3} item>
          <Box
            width="100%"
            height="100%"
            background="pink"
            pt="1500"
            pb="1500"
            pr="500"
            pl="500"
            border="1px solid red"
          >
            xs=6 sm=12 md=2 lg=3
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Rows.args = {
  ...Rows.args,
  repeatCount: 12,
  background: "#0000FF",
};

Rows.parameters = {
  docs: {
    description: {
      story: "Grid item이 여러 개일 경우 예제입니다.",
    },
  },
  options: { showPanel: true },
};
