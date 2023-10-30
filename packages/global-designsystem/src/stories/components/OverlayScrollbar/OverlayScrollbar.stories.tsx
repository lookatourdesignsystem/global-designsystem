import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OverlayScrollbar } from ".";
import { Typography } from "src/stories/foundation/Typography";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Box } from "../Box";
import { useTheme } from "src/hooks/useTheme";
import { useEffect, useState } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import { overlayScrollbarDesc } from "src/stories/docs/overlayScrollbar";

export default {
  title: "Foundation/OverlayScrollbar",
  component: OverlayScrollbar,
  args: {
    width: "300px",
    height: "300px",
  },
  ...overlayScrollbarDesc,
} as ComponentMeta<typeof OverlayScrollbar>;

export const Default: ComponentStory<typeof OverlayScrollbar> = (args) => {
  const theme = useTheme();
  return (
    <OverlayScrollbar {...args}>
      <Stack
        width="500px"
        height="500px"
        background={theme.colors.secondary.lighten}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3">500px X 500px</Typography>
      </Stack>
    </OverlayScrollbar>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BodyOverlayScrollbar: ComponentStory<typeof OverlayScrollbar> = () => {
  const [bodyOverlayScrollbarsApplied, setBodyOverlayScrollbarsApplied] =
    useState<boolean | null>(null);
  const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] =
    useOverlayScrollbars({
      defer: true,
      events: {
        initialized: () => {
          setBodyOverlayScrollbarsApplied(true);
        },
        destroyed: () => {
          setBodyOverlayScrollbarsApplied(false);
        },
      },
    });

  const toggleBodyOverlayScrollbars = () => {
    const bodyOsInstance = getBodyOverlayScrollbarsInstance();

    if (bodyOsInstance && !bodyOsInstance.state().destroyed) {
      bodyOsInstance.destroy();
    } else {
      initBodyOverlayScrollbars({
        target: document.body,
        cancel: {
          body: false,
        },
      });
    }
  };

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <Box height="120vh">
      {bodyOverlayScrollbarsApplied !== null && (
        <Button onClick={toggleBodyOverlayScrollbars}>
          {bodyOverlayScrollbarsApplied ? "Destroy" : "Initialize"} Body
          OverlayScrollbars
        </Button>
      )}
    </Box>
  );
};
