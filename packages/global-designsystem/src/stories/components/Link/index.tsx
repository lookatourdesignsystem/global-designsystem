import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import { LinkVariant } from "../../../types";
import { StyledLinkA } from "./styles";

export interface LinkProps {
  variant?: LinkVariant;
  href?: string;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  title?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hideUnderline?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  testid?: string;
}

export const Link = ({
  variant = "body1",
  href,
  rel,
  target,
  title,
  disabled = false,
  leftIcon,
  rightIcon,
  hideUnderline = false,
  children,
  className,
  onClick,
  testid,
}: LinkProps) => {
  const theme = useTheme();

  const getClassNames = (
    variant: LinkVariant,
    hideUnderline: boolean,
    className?: string
  ) => {
    let classNames = [];

    if (hideUnderline !== true) {
      classNames.push(`underline`);
    }

    if (variant) {
      classNames.push(`typography-default-${variant}`);
    }

    if (className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };

  return (
    <StyledLinkA
      href={href}
      role={href ? undefined : "button"}
      rel={rel}
      target={target}
      disabled={disabled}
      title={title}
      onClick={onClick}
      className={getJoinedClassName("Link", {
        className: getClassNames(variant, hideUnderline, className),
      })}
      theme={theme}
      data-testid={testid}
    >
      {leftIcon &&
        cloneElement(leftIcon as ReactElement, {
          className: `typography-default-${variant} leftIcon`,
        })}
      {children}
      {rightIcon &&
        cloneElement(rightIcon as ReactElement, {
          className: `typography-default-${variant} rightIcon`,
        })}
    </StyledLinkA>
  );
};
