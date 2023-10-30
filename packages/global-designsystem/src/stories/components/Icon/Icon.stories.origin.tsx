import { ComponentStory, Meta } from "@storybook/react";
import { Icon } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { ReactComponent as SourceIcon } from "../../../assets/images/search.svg";
import { iconDesc } from "src/stories/docs/icon";
// INSERT IMPORT

const meta: Meta = {
  title: "Foundation/Icon",
  component: Icon,
  args: {
    fontSize: 24,
    color: "currentColor",
    children: <SourceIcon />,
  },
  ...iconDesc,
};

export default meta;

export const Default: ComponentStory<typeof Icon> = (args) => {
  return (
    <Icon {...args}>
      <SourceIcon />
    </Icon>
  );
};
Default.parameters = {
  controls: { exclude: ["theme"] },
};

export const IconLibrary: ComponentStory<typeof Icon> = () => {
  const theme = useTheme();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {/* INSERT COMPONENT */}
    </div>
  );
};
