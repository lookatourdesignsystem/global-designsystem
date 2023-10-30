import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fragment, useState } from "react";
import { ClickAwayListener } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Box } from "../Box";
import { Button } from "../Button";
import { StyledContainerBox } from "./styles";
import { clickAwayListenerDesc } from "src/stories/docs/clickAwayListener";
import { css } from "@emotion/react";

export default {
  title: "Util/ClickAwayListener",
  component: ClickAwayListener,
  args: {
    mouseEvent: "click",
    touchEvent: "touchend",
  },
  ...clickAwayListenerDesc,
} as ComponentMeta<typeof ClickAwayListener>;

export const Default: ComponentStory<typeof ClickAwayListener> = (args) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <div>first line</div>
      <div>second line</div>
      <div>third line</div>
      <ClickAwayListener
        {...args}
        onClickAway={() => {
          setOpen(false);
        }}
      >
        <StyledContainerBox>
          <Button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Open menu dropdown
          </Button>
          {open && (
            <Box
              background={theme.colors.system.warning.main}
              borderRadius="200"
              css={css`
                position: absolute;
                top: calc(100% + ${theme.spacing[100]}px);
                left: 0;
                right: 50%;
                text-align: center;
                z-index: 10;
              `}
            >
              Click me, I will stay visible until you click outside.
            </Box>
          )}
        </StyledContainerBox>
      </ClickAwayListener>
      <div>fourth line</div>
      <div>fifth line</div>
    </Fragment>
  );
};
