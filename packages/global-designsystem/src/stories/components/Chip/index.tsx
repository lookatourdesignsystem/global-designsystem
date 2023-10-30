import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { ChipColor, ChipSize, ChipType } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledChipDiv, StyledChipTextTypography } from "./styles";
export interface ChipProps {
  type: ChipType;
  color: ChipColor;
  selected?: boolean;
  disabled?: boolean;
  size?: ChipSize;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: any;
  className?: string;
  testid?: string;
}

export const Chip = ({
  type = "solid",
  color = "default",
  selected = false,
  disabled = false,
  size = "m",
  label,
  leftIcon,
  rightIcon,
  onClick,
  className,
  testid,
}: ChipProps) => {
  const theme = useTheme();

  const getClassNames = (
    size: ChipSize,
    selected: boolean,
    disabled: boolean,
    className?: string
  ) => {
    let classNames = [];
    if (size) {
      classNames.push(size);
    }
    if (selected) {
      classNames.push("selected");
    }
    if (disabled) {
      classNames.push(disabled);
    }
    if (className) {
      classNames.push(className);
    }
    return classNames.join(" ");
  };

  return (
    <StyledChipDiv
      className={getJoinedClassName("Chip", {
        className: getClassNames(size, selected, disabled, className),
      })}
      type={type}
      color={color}
      selected={selected}
      disabled={disabled}
      size={size}
      colors={theme.colors}
      onClick={onClick}
      data-testid={testid}
    >
      {leftIcon}
      <StyledChipTextTypography
        className="ChipLabel"
        variant={size === "s" ? "caption2" : "body2"}
        type={type}
        color={color}
        selected={selected}
        disabled={disabled}
        size={size}
        colors={theme.colors}
        textAlign="center"
        css={css`
          margin-left: ${leftIcon ? 5 : 0}px;
          margin-right: ${rightIcon ? 7 : 0}px;
        `}
      >
        {label}
      </StyledChipTextTypography>
      {rightIcon}
    </StyledChipDiv>
  );
};
