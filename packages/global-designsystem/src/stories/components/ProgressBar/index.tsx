import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { ProgressBarState, ProgressBarVariant } from "../../../types";
import { Typography } from "../../foundation/Typography";
import {
  ProgressBarMainBarSpan,
  ProgressBarSpan,
  ProgressBarSubBarSpan,
} from "./styles";

export interface ProgressBarProps {
  value?: number;
  range?: { min: number; max: number };
  variant: ProgressBarVariant;
  label?: string;
  helperText?: string;
  state?: ProgressBarState;
  className?: string;
  testid?: string;
}

export const ProgressBar = ({
  className,
  value = 0,
  range = {
    min: 0,
    max: 100,
  },
  variant = "indeterminate",
  label,
  helperText,
  state = "normal",
  testid,
}: ProgressBarProps) => {
  const theme = useTheme();
  const color =
    state === "normal"
      ? theme.colors.primary.main
      : theme.colors.system[state].main;

  useEffect(() => {
    if (value < range.min || value > range.max) {
      throw new Error(
        `ProgressBar : The value(${value}) is not in range(min: ${range.min}, max: ${range.max})`
      );
    }
  }, [range.max, range.min, value]);

  return (
    <div
      className={getJoinedClassName("ProgressBar", {
        className,
      })}
      data-testid={testid}
    >
      {label && (
        <Typography
          variant="caption1"
          color={theme.colors.text.low}
          className="ProgressBarLabel"
        >
          {label}
        </Typography>
      )}
      <ProgressBarSpan
        variant={variant}
        backgroundColor={theme.colors.gray[300]}
      >
        <ProgressBarMainBarSpan
          variant={variant}
          color={color}
          range={range}
          value={value}
        />
        {variant === "indeterminate" && (
          <ProgressBarSubBarSpan
            variant={variant}
            color={color}
            range={range}
          />
        )}
      </ProgressBarSpan>
      {helperText && (
        <Typography
          variant="caption1"
          color={
            state === "error"
              ? theme.colors.system.error.main
              : theme.colors.text.verylow
          }
          className="ProgressBarHelperText"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};
