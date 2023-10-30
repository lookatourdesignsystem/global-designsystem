import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InlineLoading } from ".";
import { inlineLoadingDesc } from "src/stories/docs/inlineLoading";

export default {
  title: "Loading/InlineLoading",
  component: InlineLoading,
  args: {
    color: "default",
  },
  ...inlineLoadingDesc,
} as ComponentMeta<typeof InlineLoading>;

export const Default: ComponentStory<typeof InlineLoading> = (args) => {
  return <InlineLoading {...args} />;
};
