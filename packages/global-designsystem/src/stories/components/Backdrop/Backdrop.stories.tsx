import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Backdrop } from ".";
import { backdropDesc } from "src/stories/docs/backdrop";
export default {
  title: "Overlay/Dim(Backdrop)",
  component: Backdrop,
  args: {
    disableBackdropClose: false,
  },
  ...backdropDesc,
} as ComponentMeta<typeof Backdrop>;

export const Default: ComponentStory<typeof Backdrop> = (args) => {
  return <Backdrop {...args} />;
};
