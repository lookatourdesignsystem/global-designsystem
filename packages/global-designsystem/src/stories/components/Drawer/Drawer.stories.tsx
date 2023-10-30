import { ComponentStory, Meta } from "@storybook/react";
import { Fragment, useState } from "react";
import { Drawer } from ".";
import { CloseFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { drawerDesc } from "src/stories/docs/drawer";
import { Global, css } from "@emotion/react";

const meta: Meta = {
  title: "Overlay/Drawer",
  component: Drawer,
  args: {
    open: true,
    direction: "left",
    backdropColor: "rgba(0,0,0,0.5)",
  },
  decorators: [
    (storyFn) => (
      <div
        id="sidebar-root"
        style={{
          transform: "scale(1)",
          height: "100%",
          minHeight: "400px",
        }}
      >
        {storyFn()}
        <Global
          styles={css`
            body {
              overflow: visible !important;
            }
          `}
        />
      </div>
    ),
  ],
  ...drawerDesc,
};

export default meta;

export const Default: ComponentStory<typeof Drawer> = (args) => {
  return (
    <Drawer {...args} open={args.open} direction={args.direction}>
      children
    </Drawer>
  );
};

export const HeaderAndFooter: ComponentStory<typeof Drawer> = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        onClose={() => setOpen(false)}
        open={open}
        header={
          <Box background="green" pt="500" pr="500" pb="200" pl="500">
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">header</Typography>
              <Button
                icon
                borderRadius="circle"
                size="xs"
                onClick={() => setOpen(false)}
              >
                <CloseFilledIcon />
              </Button>
            </Stack>
          </Box>
        }
        footer={
          <Box
            background="gray"
            width="100%"
            pt="200"
            pr="500"
            pl="500"
            pb="500"
          >
            footer
          </Box>
        }
      >
        <Box background="pink" pr="500" pl="500">
          {[...new Array(100)].map((el, i) => (
            <p key={i}>children {i}</p>
          ))}
        </Box>
      </Drawer>
    </Fragment>
  );
};
HeaderAndFooter.parameters = {
  docs: {
    description: {
      story:
        "상단과 하단에 고정되어있는 헤더와 풋터를 넣고 싶은면 header와 footer prop을 활용합니다.",
    },
    inlineStories: false,
    iframeHeight: 400,
  },
  options: { showPanel: false },
};
