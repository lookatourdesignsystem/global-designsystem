import { ButtonVariant, SizeType } from "./../../../types";
import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";

export const PaddingNFonts = (
  sizeType = "l" as SizeType,
  variant = "solid" as ButtonVariant,
  selected = false,
  icon = false,
  size = 48
) => {
  const padding = { x: 0, y: 0 };
  const font = { fontSize: 16, lineHeight: 24 };
  let margin = 0;

  if (icon) {
    if (sizeType === "xl") {
      font.fontSize = 24;
      margin = -20;
    } else if (sizeType === "l") {
      font.fontSize = 24;
      margin = -16;
    } else if (sizeType === "m") {
      font.fontSize = 20;
      margin = -14;
    } else if (sizeType === "s") {
      font.fontSize = 20;
      margin = -10;
    } else if (sizeType === "xs") {
      font.fontSize = 16;
      margin = -8;
    } else if (sizeType === "xxs") {
      font.fontSize = 12;
      margin = -8;
    }
    return {
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${font.fontSize}px`,
      margin: `${variant === "solidSub" || variant === "text" ? margin : 0}px`,
    };
  }

  if (sizeType === "xxs") {
    padding.x = 8;
    font.fontSize = 10;
    font.lineHeight = 15;
  } else if (sizeType === "xs") {
    padding.x = 8;
    font.fontSize = 12;
    font.lineHeight = 18;
  } else if (sizeType === "s") {
    padding.x = 12;
    font.fontSize = 14;
    font.lineHeight = 21;
  } else if (sizeType === "m") {
    padding.x = 16;
    font.fontSize = 16;
    font.lineHeight = 24;
  } else if (sizeType === "l") {
    padding.x = 16;
    font.fontSize = 16;
    font.lineHeight = 24;
  } else if (sizeType === "xl") {
    padding.x = 20;
    font.fontSize = 16;
    font.lineHeight = 24;
  }
  if (variant === "outlined" || selected) {
    padding.x -= 1;
  }

  return {
    padding: `${padding.y}px ${padding.x}px`,
    height: `${size}px`,
    fontSize: `${font.fontSize}px`,
    lineHeight: `${font.lineHeight}px`,
  };
};

export const StyledButton = styled.button<{
  icon?: boolean;
  theme?: ThemeOptions;
  block?: boolean;
  disabled?: boolean;
  variant: ButtonVariant;
  selected: boolean;
  borderRadius: string | number;
}>`
  ${({ disabled, icon, theme, block, variant, selected, borderRadius }) => `
  position: relative;
  font-family: ${theme.typography.fonts.default.fontFamily};
  font-weight:700;
  display: ${block ? "flex" : "inline-flex"};
  align-items: center;
  justify-content: center;
  width: ${block ? "100%" : "auto"};
  border-radius: ${
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius
  };
  pointer-events: ${disabled ? "none" : "auto"};

  @media (hover: hover) {
    &:not([disabled]):not(.btn-disabled):hover {
      &:after {
        position: absolute;
        content: "";
        background-color: ${theme.colors.interactive.hover};
        border-radius: inherit;
        width: calc(100% + ${variant === "outlined" || selected ? 2 : 0}px);
        height: calc(100% + ${variant === "outlined" || selected ? 2 : 0}px);
        left: ${variant === "outlined" || selected ? -1 : 0}px;
        top: ${variant === "outlined" || selected ? -1 : 0}px;
      }
    }
  }
  
  &:not([disabled]):not(.btn-disabled):active {
    &:after {
      position: absolute;
      content: "";
      background-color: ${theme.colors.interactive.active};
      border-radius: inherit;
      width: calc(100% + ${variant === "outlined" || selected ? 2 : 0}px);
      height: calc(100% + ${variant === "outlined" || selected ? 2 : 0}px);
      left: ${variant === "outlined" || selected ? -1 : 0}px;
      top: ${variant === "outlined" || selected ? -1 : 0}px;
    }
  }
  &:disabled {
    opacity: ${theme.colors.interactive.disabled};
  }
  ${
    icon === true
      ? `
  && {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
      : ""
  }`}
`;

export const StyledIconSpan = styled.span<{
  direction: "left" | "right";
  size: SizeType;
}>`
  --margin: ${({ size }) => (size === "xl" || size === "l" ? "8px" : "4px")};
  ${({ direction }) =>
    direction === "left"
      ? `margin-right: var(--margin);`
      : `margin-left: var(--margin);`}
`;
