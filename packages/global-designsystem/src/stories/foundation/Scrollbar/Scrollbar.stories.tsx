import { css } from "@emotion/react";
import { Story } from "@storybook/react";
import { Fragment } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { ScrollbarRadius, ScrollbarWidth } from "../../../types";
import { Grid } from "../Grid";
import { Typography } from "../Typography";

export default {
  title: "Foundation/Scrollbar",
};

const getExampleScrollBox = (
  theme: ThemeOptions,
  use: boolean,
  width?: ScrollbarWidth,
  radius?: ScrollbarRadius
) => {
  const getScrollbarStyles = (
    theme: ThemeOptions,
    use: boolean,
    width?: ScrollbarWidth,
    radius?: ScrollbarRadius
  ) => {
    let styles = ``;
    if (use === false) {
      return styles;
    }

    styles += `
    /* WebKit and Chromiums */
    ::-webkit-scrollbar {
      width: ${width === "thin" ? 11 : 15}px;
      background-color: ${theme.colors.gray[100]};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.main};
      border-radius: ${
        radius === "circle" ? theme.shape.borderRadius[200] : 0
      }px;
      border: ${width === "thin" ? 2 : 3}px solid ${theme.colors.gray[100]};
    }
    /* Firefox */
    @supports (scrollbar-color: ${theme.colors.primary.main} ${
      theme.colors.gray[100]
    }){
      scrollbar-color: ${theme.colors.primary.main} ${theme.colors.gray[100]};
    }
    @supports (scrollbar-width: ${width}){
      scrollbar-width: ${width};
    }
  `;
    return styles;
  };

  return (
    <div
      css={css`
        width: 200px;
        height: 100px;
        background: pink;
        overflow-y: scroll;
        ${getScrollbarStyles(theme, use, width, radius)}
      `}
    >
      {[...Array(10)].map((item, i) => (
        <Fragment key={i}>
          Scrollbar
          <br />
        </Fragment>
      ))}
    </div>
  );
};

const Template: Story = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={2}>
          {" "}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6" textAlign="center">
            Radius
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" textAlign="center">
            Use
          </Typography>
        </Grid>
        <Grid item xs={2}>
          {" "}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" textAlign="center">
            square
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" textAlign="center">
            circle
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" textAlign="center">
            true
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h6" textAlign="center">
            Width
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1" textAlign="center">
            thin
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          {getExampleScrollBox(theme, true, "thin", "square")}
        </Grid>
        <Grid
          item
          xs={4}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          {getExampleScrollBox(theme, true, "thin", "circle")}
        </Grid>
        <Grid item xs={1}>
          {" "}
        </Grid>
        <Grid item xs={2}>
          {" "}
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1" textAlign="center">
            auto
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          {getExampleScrollBox(theme, true, "auto", "square")}
        </Grid>
        <Grid
          item
          xs={4}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          {getExampleScrollBox(theme, true, "auto", "circle")}
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" textAlign="center">
            false
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {getExampleScrollBox(theme, false, "auto", "circle")}
        </Grid>
      </Grid>
    </Fragment>
  );
};

const Variant = Template.bind({});
Variant.args = { ...Template.args };
