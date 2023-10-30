import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment, useState } from "react";
import { useSnackbar } from "../../../hooks/components/useSnackbar";
import { SnackbarAlertType } from "../../../types";
import { SnackbarProvider } from "../../../providers/Snackbar";
import { Stack } from "src/stories/components/Stack";
import { Button } from "src/stories/components/Button";
import { Snackbar } from "src/stories/components/Snackbar";
import { useSnackbarDesc } from "src/stories/docs/useSnackbar";

export default {
  title: "Hooks/useSnackbar",
  ...useSnackbarDesc,
} as ComponentMeta<typeof Snackbar>;

export const Default: ComponentStory<typeof Snackbar> = () => {
  const Example = () => {
    const { addMessage, clearMessages } = useSnackbar();
    const [test, setTest] = useState(0);

    return (
      <Stack direction="row" spacing="400">
        <Button
          size="s"
          onClick={() => {
            addMessage(`message with CloseButton #${test}`, {
              onClickAction: () => {},
              alert: ["default", "error", "info", "warning", "success"][
                test % 5
              ] as SnackbarAlertType,
              position: {
                xs: { bottom: 40 },
                sm: { bottom: 0 },
              },
              duration: 4000,
              showActionButton: false,
              showCloseButton: true,
            });
            setTest((prev) => prev + 1);
          }}
        >
          Show Fade In
        </Button>
        <Button
          size="s"
          onClick={() => {
            addMessage(`message with ActionButton #${test}`, {
              onClickAction: () => {
                alert("Clicked Action");
              },
              actionText: "Action",
              transitionType: ["slide-bottom-center", "fade"],
              alert: ["default", "error", "info", "warning", "success"][
                test % 5
              ] as SnackbarAlertType,
              position: {
                xs: { bottom: 20 },
                sm: { bottom: 0 },
              },
              duration: 8000,
              timeout: 1000,
              showActionButton: true,
              showCloseButton: true,
            });
            setTest((prev) => prev + 1);
          }}
        >
          Show Slide Bottom Up
        </Button>
        <Button
          size="s"
          onClick={() => {
            setTest((prev) => prev + 1);
            addMessage(`message only #${test}`, { duration: 4000 });
          }}
        >
          message only
        </Button>
        <Button
          size="s"
          color="primary"
          onClick={() => {
            clearMessages();
          }}
        >
          clear messages
        </Button>
      </Stack>
    );
  };
  return (
    <Fragment>
      <SnackbarProvider>
        <Example />
      </SnackbarProvider>
    </Fragment>
  );
};
