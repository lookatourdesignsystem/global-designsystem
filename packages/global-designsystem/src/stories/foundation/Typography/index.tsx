import { css } from "@emotion/react";
import { Property } from "csstype";
import { useTheme } from "../../../hooks/useTheme";
import { typoVariants } from "../../../modules/typos";
import { TagVariant, TypoFontFamily, TypoVariant } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface TypographyProps {
  fontFamily?: TypoFontFamily;
  variant?: TypoVariant;
  color?: string;
  ellipsis?: number;
  fitHeight?: boolean;
  className?: string;
  textAlign?: Property.TextAlign;
  wordBreak?: Property.WordBreak;
  decoration?: "none" | "underline" | "line-through";
  children: React.ReactNode;
  testid?: string;
}

export const Typography = ({
  fontFamily = "default",
  variant = "body2",
  color,
  ellipsis = 0,
  fitHeight = false,
  className = "",
  textAlign = "left",
  wordBreak = "normal",
  decoration = "none",
  children,
  testid,
}: TypographyProps) => {
  const theme = useTheme();
  const Tag = typoVariants[variant] as TagVariant;

  const getClassNames = (
    fontFamily: TypoFontFamily,
    variant: TypoVariant,
    ellipsis: number,
    className?: string
  ) => {
    let classNames = [];

    if (className) {
      classNames.push(className);
    }

    if (variant) {
      classNames.push(`typography-${fontFamily}-${variant}`);
    }

    if (ellipsis > 0) {
      classNames.push(`ellipsis-${ellipsis}`);
    }

    if (Object.keys(theme.typography.fonts[fontFamily]).length === 0) {
      console.log(`${fontFamily} font is not defined on theme`);
    }

    return classNames.join(" ");
  };

  const getTypographyStyle = (
    fontFamily: TypoFontFamily,
    ellipsis: number,
    color: string,
    variant: TypoVariant
  ) => css`
    color: ${color};
    text-align: ${textAlign};
    word-break: ${wordBreak};
    text-decoration-line: ${decoration};
    ${decoration === "underline" &&
    `
      text-underline-position: under;
    `}
    ${ellipsis === 1
      ? `
     &.ellipsis-1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `
      : ellipsis > 1
      ? `
      &.ellipsis-${ellipsis} {
      ${fitHeight === true ? "max-" : ""}height: ${
          Number(theme.typography.fontSize.replace("px", "")) *
          Number(
            theme.typography.fonts[fontFamily].variant[
              variant
            ].fontSize.replace("rem", "")
          ) *
          (ellipsis || 0) *
          theme.typography.fonts[fontFamily].variant[variant].lineHeight
        }px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
      `
      : ``}
  `;

  return (
    <Tag
      className={getJoinedClassName("Typography", {
        className: getClassNames(fontFamily, variant, ellipsis, className),
      })}
      data-testid={testid}
      css={[
        { color: theme.colors.gray[700] },
        getTypographyStyle(fontFamily, ellipsis, color!, variant),
      ]}
    >
      {children}
    </Tag>
  );
};
