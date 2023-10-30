import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import {
  BreakpointKey,
  SnackbarAlertType,
  SnackbarVariant,
} from "../../../types";
import { Stack } from "../Stack";
import { BreakpointOptions } from "../../../modules/breakpoints";

const getPositionStyle = (
  theme: ThemeOptions,
  breakpoints: BreakpointOptions,
  basePosition?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  },
  position?: {
    [key in BreakpointKey]?: {
      top?: number | string;
      left?: number;
      right?: number;
      bottom?: number | string;
    };
  }
) => {
  if (position === undefined) {
    return "";
  }

  let positionStyle = "";
  const breakpointKeys = Object.keys(position) as BreakpointKey[];
  for (let breakpointKey of breakpointKeys) {
    const p = position[breakpointKey];

    positionStyle += `
    ${breakpoints.up(breakpointKey)} {
      ${
        p?.top !== undefined
          ? `top: calc(${basePosition?.top || 0}px + ${p?.top || 0}px + 20px);`
          : ""
      }${
      p?.right !== undefined
        ? `right: calc(${basePosition?.right || 0}px + ${
            p?.right || 0
          }px + 20px); transform: none; left: auto;`
        : ""
    }${
      p?.left !== undefined
        ? `left: calc(${basePosition?.left || 0}px + ${
            p?.left || 0
          }px + 20px);  transform: none;`
        : ""
    }${
      p?.bottom !== undefined
        ? `bottom: calc(${basePosition?.bottom || 0}px + ${
            p?.bottom || 0
          }px + 20px);`
        : ""
    }     
    }
    `;
  }

  return positionStyle;
};

export const SnackbarStack = styled(Stack)<{
  theme: ThemeOptions;
  breakpoints: BreakpointOptions;
  alert: SnackbarAlertType;
  variant: SnackbarVariant;
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
}>`
  ${({ theme, breakpoints, alert, variant, basePosition, position }) => `
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    ${getPositionStyle(theme, breakpoints, basePosition, position)}
    padding: ${
      variant === "outlined" ? theme.spacing[200] - 1 : theme.spacing[200]
    }px ${
    variant === "outlined" ? theme.spacing[400] - 1 : theme.spacing[400]
  }px;
    width: 320px;
    background-color: ${
      variant === "outlined"
        ? theme.colors.gray[0]
        : alert === "default"
        ? theme.colors.gray[1000]
        : theme.colors.system[alert].main
    };
    
    border-radius: ${theme.shape.borderRadius[200]}px;
    ${variant === "outlined" && `border: 1px solid ${theme.colors.border}`};
    ${breakpoints.up("sm")} {
      min-width: 320px;
      width: max-content;
      max-width: 552px;
    }
    `}
`;

const interactiveStyle = (
  theme: ThemeOptions,
  action: "hover" | "active"
) => css`
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.interactive[action]};
  }
`;

const buttonStyle = (theme: ThemeOptions) => css`
  height: 36px;
  position: relative;
  border-radius: ${theme.shape.borderRadius[200]}px;
  @media (hover: hover) {
    &:hover {
      ${interactiveStyle(theme, "hover")}
    }
  }
  &:active {
    ${interactiveStyle(theme, "active")}
  }
`;

export const StyledActionButton = styled.button<{ theme: ThemeOptions }>`
  padding: 0 8px;
  ${({ theme }) => buttonStyle(theme)}
`;

export const StyledCloseButton = styled.button<{ theme: ThemeOptions }>`
  padding: 0 6px;
  ${({ theme }) => buttonStyle(theme)}
`;
