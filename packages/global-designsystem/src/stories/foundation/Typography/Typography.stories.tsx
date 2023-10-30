import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment } from "react";
import { Typography } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { typographyDesc } from "src/stories/docs/typography";

export default {
  title: "Foundation/Typography",
  component: Typography,
  args: {
    fontFamily: "default",
    variant: "body2",
    ellipsis: 0,
    textAlign: "left",
    wordBreak: "normal",
    decoration: "none",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla volutpat ante aliquet elementum.",
  },
  ...typographyDesc,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = (args) => {
  const theme = useTheme();
  return (
    <Fragment>
      <Typography {...args} />
      <div
        style={{
          width: 100,
          background: theme.colors.primary.main,
        }}
      >
        <Typography {...args} />
      </div>
    </Fragment>
  );
};

export const Variant: ComponentStory<typeof Typography> = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Typography>
        Default: {String(theme.typography.fonts.default.fontFamily)}
      </Typography>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="h5">subtitle</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption1">caption1</Typography>
      <br />
      <Typography variant="caption2">caption2</Typography>
      <br />
      <Typography variant="button">button</Typography>
      <br />
      <Typography variant="overline">overline</Typography>
    </Fragment>
  );
};
Variant.parameters = {
  docs: {
    description: {
      story: "variant에 따라 HTML Element와 스타일이 달라집니다.",
    },
  },
  options: { showPanel: false },
};
export const Expressive: ComponentStory<typeof Typography> = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Typography fontFamily="expressive">
        Expressive : {String(theme.typography.fonts.expressive.fontFamily)}
      </Typography>
      <Typography fontFamily="expressive" variant="h1">
        heading1
      </Typography>
      <Typography fontFamily="expressive" variant="h2">
        heading2
      </Typography>
      <Typography fontFamily="expressive" variant="h3">
        heading3
      </Typography>
      <Typography fontFamily="expressive" variant="h4">
        heading4
      </Typography>
      <Typography fontFamily="expressive" variant="h5">
        heading5
      </Typography>
      <Typography fontFamily="expressive" variant="h6">
        heading6
      </Typography>
      <Typography fontFamily="expressive" variant="h5">
        subtitle
      </Typography>
      <Typography fontFamily="expressive" variant="subtitle1">
        subtitle1
      </Typography>
      <Typography fontFamily="expressive" variant="subtitle2">
        subtitle2
      </Typography>
      <Typography fontFamily="expressive" variant="body1">
        body1
      </Typography>
      <Typography fontFamily="expressive" variant="body2">
        body2
      </Typography>
      <Typography fontFamily="expressive" variant="caption1">
        caption1
      </Typography>
      <br />
      <Typography fontFamily="expressive" variant="caption2">
        caption2
      </Typography>
      <br />
      <Typography fontFamily="expressive" variant="button">
        button
      </Typography>
      <br />
      <Typography fontFamily="expressive" variant="overline">
        overline
      </Typography>
    </Fragment>
  );
};
Expressive.parameters = {
  docs: {
    description: {
      story:
        "expressive 폰트를 표현하고자할 경우 fontFamily prop을 사용합니다.",
    },
  },
  options: { showPanel: false },
};

export const Ellipsis: ComponentStory<typeof Typography> = () => {
  return (
    <div
      style={{
        background: "#0073f0",
        width: 100,
      }}
    >
      <Typography
        decoration="none"
        ellipsis={5}
        fontFamily="default"
        textAlign="left"
        variant="body2"
        wordBreak="normal"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
        amet nulla volutpat ante aliquet elementum.
      </Typography>
    </div>
  );
};
Ellipsis.parameters = {
  docs: {
    description: {
      story: "Typography를 ellipsis로 말줄임을 표현할 수 있습니다.",
    },
  },
};
