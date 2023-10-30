import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { cloneElement, Fragment } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../../hooks/useTheme";
import {
  BreakpointKey,
  SnackbarAlertType,
  SnackbarVariant,
} from "../../../types";
import { Typography } from "../../foundation/Typography";
import { Stack } from "../Stack";
import { Transition } from "../Transition";
import { StyledActionButton, SnackbarStack, StyledCloseButton } from "./styles";
import { Spacer } from "../Spacer";
import {
  CheckCircleFilledIcon,
  CloseFilledIcon,
  ErrorFilledIcon,
  InformationFilledIcon,
  WarningFilledIcon,
} from "@lookatourdesignsystem/icons-library";
import { css } from "@emotion/react";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface SnackbarProps {
  variant?: SnackbarVariant;
  show: boolean;
  message: string;
  showActionButton?: boolean;
  actionText?: string;
  alert?: SnackbarAlertType;
  showSystemIcon?: boolean;
  showCloseButton?: boolean;
  transitionType?: ("fade" | "slide-bottom-center")[];
  timeout: number;
  onClickAction?: () => void;
  onClose?: () => void;
  position?: {
    [key in BreakpointKey]?: {
      top?: number | string;
      left?: number;
      right?: number;
      bottom?: number | string;
    };
  };
  basePosition?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  exited?: () => void;
  testid?: string;
  className?: string;
}

export const Snackbar = ({
  variant = "solid",
  show,
  message,
  showActionButton = false,
  actionText = "OK",
  alert = "default",
  showSystemIcon = true,
  showCloseButton = true,
  timeout,
  onClickAction,
  onClose,
  position = {
    xs: {
      bottom: 20,
    },
  },
  basePosition,
  transitionType = ["fade"],
  exited = () => {},
  testid,
  className,
}: SnackbarProps) => {
  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const snackbarRoot = document.getElementById("snackbar-root") as HTMLElement;
  const systemIconColor =
    variant === "solid"
      ? alert === "default"
        ? theme.colors.gray[0]
        : theme.colors.system[alert].text
      : alert === "default"
      ? theme.colors.text.main
      : theme.colors.system[alert].main;

  const systemIcon =
    alert === "error" ? (
      <ErrorFilledIcon />
    ) : alert === "info" ? (
      <InformationFilledIcon />
    ) : alert === "success" ? (
      <CheckCircleFilledIcon />
    ) : alert === "warning" ? (
      <WarningFilledIcon />
    ) : null;

  return (
    <Fragment>
      {createPortal(
        <Transition
          inTransition={show}
          timeout={timeout}
          types={transitionType}
          unmountOnExit
          exited={() => {
            exited();
          }}
        >
          <SnackbarStack
            className={getJoinedClassName("Snackbar", {
              className,
            })}
            justifyContent="center"
            theme={theme}
            breakpoints={breakpoints}
            alert={alert}
            position={position}
            basePosition={basePosition}
            variant={variant}
            data-testid={testid}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" spacing="200">
                {systemIcon !== null &&
                  showSystemIcon &&
                  cloneElement(systemIcon as EmotionJSX.Element, {
                    fontSize: 24,
                    color: systemIconColor,
                  })}
                <Typography
                  variant="body2"
                  color={
                    variant === "outlined"
                      ? theme.colors.text.main
                      : systemIconColor
                  }
                  className="SnackbarMessage"
                  css={css`
                    padding: 8px 0;
                  `}
                >
                  {message}
                </Typography>
              </Stack>
              {(showActionButton || showCloseButton) && <Spacer x="200" />}
              {showActionButton && (
                <StyledActionButton
                  onClick={onClickAction}
                  theme={theme}
                  className="SnackbarActionButton"
                >
                  <Typography
                    variant="subtitle2"
                    color={
                      variant === "outlined" || alert === "default"
                        ? theme.colors.primary.main
                        : systemIconColor
                    }
                  >
                    {actionText}
                  </Typography>
                </StyledActionButton>
              )}
              {showCloseButton && (
                <StyledCloseButton
                  onClick={onClose}
                  theme={theme}
                  className="SnackbarCloseButton"
                >
                  <CloseFilledIcon
                    fontSize={24}
                    color={
                      variant === "outlined"
                        ? theme.colors.text.main
                        : systemIconColor
                    }
                  />
                </StyledCloseButton>
              )}
            </Stack>
          </SnackbarStack>
        </Transition>,
        snackbarRoot
      )}
    </Fragment>
  );
};
