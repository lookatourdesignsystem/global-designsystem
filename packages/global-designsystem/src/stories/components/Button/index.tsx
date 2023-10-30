import { css } from "@emotion/react";
import { cloneElement, Fragment, ReactElement, ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { ThemeOptions } from "../../../modules/defaultTheme";
import {
  BorderRadiusMultiple,
  ButtonColors,
  ButtonStatus,
  ButtonType,
  ButtonVariant,
  SizeType,
} from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { InlineLoading } from "../InlineLoading";
import { PaddingNFonts, StyledButton, StyledIconSpan } from "./styles";
export interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColors;
  size?: SizeType;
  icon?: boolean;
  selected?: boolean;
  disabled?: boolean;
  block?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  borderRadius?: BorderRadiusMultiple;
  className?: string;
  children: ReactNode;
  onClick?: any;
  testid?: string;
}

export const Button = ({
  icon,
  type = "button",
  variant = icon ? "text" : "solid",
  color = "default",
  size = "m",
  selected = false,
  disabled = false,
  block = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  borderRadius = "200",
  className,
  children,
  onClick,
  testid,
}: ButtonProps) => {
  const theme = useTheme();

  const status = isLoading ? "loading" : selected ? "selected" : "default";
  const iconSize =
    size === "xxs" ? 12 : size === "xs" ? 16 : size === "s" ? 20 : 24;

  const getButtonTheme = (
    variant: ButtonVariant = "solid",
    status: ButtonStatus = "default",
    color: ButtonColors,
    theme: ThemeOptions
  ) => {
    const mainColor =
      color === "default"
        ? theme.colors.gray[1000]
        : color === "error" || color === "warning" || color === "success"
        ? theme.colors.system[color].main
        : theme.colors[color].main;

    const lightenColor =
      color === "default" ||
      color === "error" ||
      color === "warning" ||
      color === "success"
        ? theme.colors.gray[50]
        : theme.colors[color].lighten;

    const textColor =
      color === "error"
        ? theme.colors.system.error.text
        : color === "primary"
        ? theme.colors.primary.text
        : color === "secondary"
        ? theme.colors.secondary.text
        : color === "warning"
        ? theme.colors.system.warning.text
        : color === "success"
        ? theme.colors.system.success.text
        : theme.colors.gray[0];

    const newButtonTheme: {
      [key in ButtonVariant]: {
        default: {
          color: string;
          fill?: string;
          backgroundColor?: string;
          border?: string;
        };
        selected: {
          color: string;
          backgroundColor?: string;
          border?: string;
          outline?: string;
          outlineOffset?: string;
        };
        loading: {
          backgroundColor?: string;
          color: string;
          border?: string;
        };
      };
    } = {
      solid: {
        default: {
          color: textColor,
          backgroundColor: mainColor,
        },
        selected: {
          color: textColor,
          backgroundColor: mainColor,
          border: `1px solid transparent`,
          outline: `1px solid ${theme.colors.gray[0]}`,
          outlineOffset: "-3px",
        },
        loading: {
          backgroundColor: mainColor,
          color: textColor,
        },
      },
      solidSub: {
        default: {
          color: mainColor,
          backgroundColor: lightenColor,
        },
        selected: {
          color: mainColor,
          backgroundColor: lightenColor,
          border: `1px solid ${mainColor}`,
          outline: `1px solid ${theme.colors.gray[0]}`,
          outlineOffset: "-2px",
        },
        loading: {
          backgroundColor: lightenColor,
          color: mainColor,
        },
      },
      outlined: {
        default: {
          color: mainColor,
          border: `1px solid ${mainColor}`,
        },
        selected: {
          color: mainColor,
          border: `1px solid ${mainColor}`,
        },
        loading: {
          border: `1px solid ${mainColor}`,
          backgroundColor: "transparent",
          color: mainColor,
        },
      },
      text: {
        default: {
          color: mainColor,
        },
        selected: {
          color: mainColor,
          border: `1px solid ${mainColor}`,
        },
        loading: {
          backgroundColor: "transparent",
          color: mainColor,
        },
      },
    };

    return newButtonTheme[variant][status];
  };

  const newButtonTheme = getButtonTheme(variant, status, color, theme);

  const getClasses = (
    selected: boolean,
    disabled: boolean,
    size: string,
    className?: string
  ) => {
    let classes = [];

    if (selected) {
      classes.push("selected");
    }

    if (disabled) {
      classes.push("disabled");
    }

    if (size) {
      classes.push(size);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(" ");
  };

  return (
    <Fragment>
      <StyledButton
        icon={icon}
        theme={theme}
        type={type}
        block={block}
        disabled={disabled || isLoading}
        variant={variant}
        selected={selected}
        borderRadius={theme.shape.borderRadius[borderRadius]}
        className={getJoinedClassName("Button", {
          className: getClasses(selected, disabled, size, className),
        })}
        css={{
          ...newButtonTheme,
          ...PaddingNFonts(size, variant, selected, icon, theme.size[size]),
        }}
        onClick={onClick}
        data-testid={testid}
      >
        {leftIcon && (
          <StyledIconSpan direction="left" size={size}>
            {cloneElement(leftIcon as ReactElement, {
              fontSize: iconSize,
            })}
          </StyledIconSpan>
        )}
        {isLoading ? (
          <InlineLoading
            css={css`
              & > div {
                background-color: currentColor;
              }
            `}
          />
        ) : (
          children
        )}
        {rightIcon && (
          <StyledIconSpan direction="right" size={size}>
            {cloneElement(rightIcon as ReactElement, {
              fontSize: iconSize,
            })}
          </StyledIconSpan>
        )}
      </StyledButton>
    </Fragment>
  );
};
