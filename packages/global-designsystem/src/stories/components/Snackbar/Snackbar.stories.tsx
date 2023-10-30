import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Snackbar } from ".";
import { snackBarDesc } from "src/stories/docs/snackbar";
export default {
  title: "Overlay/Snackbar",
  component: Snackbar,
  args: {
    variant: "solid",
    show: true,
    alert: "default",
    actionText: "OK",
    timeout: 250,
    showCloseButton: true,
    showSystemIcon: true,
    transitionType: ["fade"],
    message: "Both methods result in the same compiled code.",
  },
  decorators: [
    (storyFn) => (
      <div
        id="snackbar-root"
        style={{
          transform: "scale(1)",
          height: "100%",
          minHeight: "400px",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  ...snackBarDesc,
} as ComponentMeta<typeof Snackbar>;

export const Default: ComponentStory<typeof Snackbar> = (args) => {
  return <Snackbar {...args} />;
};
