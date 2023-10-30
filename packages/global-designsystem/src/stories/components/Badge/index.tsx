import { ReactNode, useMemo } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { BadgeColor, BadgeVariant, ShapeType } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Typography } from "../../foundation/Typography";
import { StyledBadgeDiv, StyledBadgeWrapperDiv } from "./styles";
export interface BadgeProps {
  value: number | string;
  color?: BadgeColor;
  variant?: BadgeVariant;
  shape?: ShapeType;
  max?: number;
  invisible?: boolean;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
  position?: "in" | "out";
  width?: string;
  className?: string;
  children: ReactNode;
  testid?: string;
}

export const Badge = ({
  value,
  color = "default",
  variant = "2unit",
  shape = "square",
  max = undefined,
  invisible,
  vertical = "top",
  horizontal = "right",
  position = "out",
  width,
  className,
  children,
  testid,
}: BadgeProps) => {
  const theme = useTheme();
  const content = useMemo(
    () =>
      typeof value === "number" &&
      max !== undefined &&
      value > max &&
      variant === "2unit"
        ? `${max}+`
        : variant === "1unit"
        ? String(value).slice(0, 1)
        : String(value),
    [max, value, variant]
  );

  const badgeColor: {
    [key in BadgeColor]: { background: string; color: string };
  } = {
    default: {
      background: theme.colors.gray[1000],
      color: theme.colors.gray[0],
    },
    primary: {
      background: theme.colors.primary.main,
      color: theme.colors.primary.text,
    },
    secondary: {
      background: theme.colors.secondary.main,
      color: theme.colors.secondary.text,
    },
    success: {
      background: theme.colors.system.success.main,
      color: theme.colors.system.success.text,
    },
    error: {
      background: theme.colors.system.error.main,
      color: theme.colors.system.error.text,
    },
    warning: {
      background: theme.colors.system.warning.main,
      color: theme.colors.system.warning.text,
    },
    info: {
      background: theme.colors.system.info.main,
      color: theme.colors.system.info.text,
    },
  };

  return (
    <StyledBadgeWrapperDiv
      className={getJoinedClassName("BadgeWrapper", {
        className: className,
      })}
      shape={shape}
      width={width}
      data-testid={testid}
    >
      {children}
      {!invisible && (
        <StyledBadgeDiv
          className="Badge"
          background={badgeColor[color].background}
          shape={shape}
          variant={variant}
          vertical={vertical}
          horizontal={horizontal}
          position={position}
          length={content.length}
        >
          {variant === "dot" ? null : (
            <Typography variant="overline" color={badgeColor[color].color}>
              {content}
            </Typography>
          )}
        </StyledBadgeDiv>
      )}
    </StyledBadgeWrapperDiv>
  );
};
