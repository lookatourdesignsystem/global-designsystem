import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { SpacingMultiple, StackDirection } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface StackProps {
  direction?: StackDirection;
  spacing?: SpacingMultiple | 0;
  justifyContent?:
    | "flex-start"
    | "center"
    | "space-between"
    | "flex-end"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "baseline"
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end";
  background?: string;
  p?: SpacingMultiple | 0;
  pt?: SpacingMultiple | 0;
  pr?: SpacingMultiple | 0;
  pb?: SpacingMultiple | 0;
  pl?: SpacingMultiple | 0;
  inline?: boolean;
  children: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  testid?: string;
}

// https://studiomeal.com/archives/197
// https://mui.com/components/stack/
export const Stack = ({
  direction = "column",
  spacing = 0,
  justifyContent = "flex-start",
  alignItems = "normal",
  background = "",
  p = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  inline = false,
  children,
  className,
  width,
  height,
  testid,
}: StackProps) => {
  const theme = useTheme();
  const margin: {
    [key in StackDirection]: string;
  } = {
    row: "left",
    "row-reverse": "right",
    column: "top",
    "column-reverse": "bottom",
  };
  const getGap = (direction: string, spacing: SpacingMultiple | 0) => {
    if (spacing === 0) {
      return;
    }

    return `
    & > * + * {
      margin-${margin[direction as StackDirection]}: ${
      theme.spacing[spacing]
    }px;
    }
    `;
  };
  return (
    <div
      className={getJoinedClassName("Stack", {
        className,
      })}
      data-testid={testid}
      css={css`
        width: ${width};
        height: ${height};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        flex-direction: ${direction};
        background: ${background};
        display: ${inline === false ? "flex" : "inline-flex"};
        ${p && `padding: ${theme.spacing[p]}px`};
        ${pr && `padding-right: ${theme.spacing[pr]}px`};
        ${pl && `padding-left:${theme.spacing[pl]}px`};
        ${pt && `padding-top:${theme.spacing[pt]}px`};
        ${pb && `padding-bottom:${theme.spacing[pb]}px`};
        ${getGap(direction, spacing)}
      `}
    >
      {children}
    </div>
  );
};
