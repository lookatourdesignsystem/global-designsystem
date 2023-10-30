import { css } from "@emotion/react";
import {
  HomeFilledIcon,
  DiscoverFilledIcon,
  SettingsFilledIcon,
} from "@lookatourdesignsystem/icons-library";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment, useState } from "react";
import { Menu } from ".";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { Box } from "../Box";
import { Button } from "../Button";
import { ListButton } from "../ListButton";
import { Stack } from "../Stack";
import { menuDesc } from "src/stories/docs/menu";

export default {
  title: "Overlay/Menu",
  component: Menu,
  args: {
    backdropColor: "rgba(0,0,0,0)",
  },
  decorators: [
    (storyFn) => (
      <div
        style={{
          transform: "scale(1)",
          height: "100%",
          minHeight: "300px",
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
  ...menuDesc,
} as ComponentMeta<typeof Menu>;

const ExampleMenu = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <ListButton onClick={() => {}}>
        <Box width="180px">
          <Stack direction="row" alignItems="center" spacing="200">
            <HomeFilledIcon fontSize={24} color={theme.colors.text.main} />
            <Typography variant="subtitle1" color={theme.colors.text.main}>
              Home
            </Typography>
          </Stack>
        </Box>
      </ListButton>
      <ListButton onClick={() => {}}>
        <Box width="180px">
          <Stack direction="row" alignItems="center" spacing="200">
            <DiscoverFilledIcon fontSize={24} color={theme.colors.text.main} />
            <Typography variant="subtitle1" color={theme.colors.text.main}>
              Discover
            </Typography>
          </Stack>
        </Box>
      </ListButton>
      <ListButton onClick={() => {}}>
        <Box width="180px">
          <Stack direction="row" alignItems="center" spacing="200">
            <SettingsFilledIcon fontSize={24} color={theme.colors.text.main} />
            <Typography variant="subtitle1" color={theme.colors.text.main}>
              Settings
            </Typography>
          </Stack>
        </Box>
      </ListButton>
    </Fragment>
  );
};

export const Default: ComponentStory<typeof Menu> = (args) => {
  return (
    <Menu {...args}>
      <ExampleMenu />
    </Menu>
  );
};

export const ClickWithoutBackdrop: ComponentStory<typeof Menu> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Menu
        anchorEl={
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            css={css`
              z-index: 1;
              margin-top: 4px;
              margin-bottom: 4px;
            `}
          >
            Click
          </Button>
        }
        show={showMenu}
        onClickAway={() => {
          setShowMenu(false);
        }}
        disableBackDrop
      >
        <ExampleMenu />
      </Menu>
    </div>
  );
};
ClickWithoutBackdrop.parameters = {
  controls: { exclude: ["show"] },
  docs: {
    description: {
      story: "anchorEl 클릭시 Backdrop없이 Menu가 나타나도록 구현합니다.",
    },
  },
  options: { showPanel: false },
};

export const HoverWithoutBackdrop: ComponentStory<typeof Menu> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Menu
        anchorEl={
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            css={css`
              z-index: 1;
              margin-top: 4px;
              margin-bottom: 4px;
            `}
          >
            Click
          </Button>
        }
        show={showMenu}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        disableBackDrop
      >
        <ExampleMenu />
      </Menu>
    </div>
  );
};

HoverWithoutBackdrop.parameters = {
  controls: { exclude: ["show"] },
  docs: {
    description: {
      story: "anchorEl 호버시 Backdrop없이 Menu가 나타나도록 구현합니다.",
    },
  },
  options: { showPanel: false },
};

export const ClickWithBackdrop: ComponentStory<typeof Menu> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Menu
        anchorEl={
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            css={css`
              z-index: 1;
              margin-top: 4px;
              margin-bottom: 4px;
            `}
          >
            Click
          </Button>
        }
        show={showMenu}
        backdropColor="rgba(0,0,0,0.5)"
        onClickAway={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <ExampleMenu />
      </Menu>
    </div>
  );
};

ClickWithBackdrop.parameters = {
  controls: { exclude: ["show"] },
  docs: {
    description: {
      story: "anchorEl 호버시 Backdrop없이 Menu가 나타나도록 구현합니다.",
    },
  },
  options: { showPanel: false },
};

export const HoverWithBackdrop: ComponentStory<typeof Menu> = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
      }}
    >
      <Menu
        anchorEl={
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            css={css`
              z-index: 1;
              margin-top: 4px;
              margin-bottom: 4px;
            `}
          >
            Hover
          </Button>
        }
        show={showMenu}
        backdropColor="rgba(0,0,0,0.5)"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <ExampleMenu />
      </Menu>
    </div>
  );
};

HoverWithBackdrop.parameters = {
  controls: { exclude: ["show"] },
  docs: {
    description: {
      story: "anchorEl 클릭시 Backdrop와 함께 Menu가 나타나도록 구현합니다.",
    },
  },
  options: { showPanel: false },
};
