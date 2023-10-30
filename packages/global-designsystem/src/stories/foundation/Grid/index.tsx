import { css } from "@emotion/react";
import { ReactNode } from "react";
import { BreakpointKey } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface GridProps {
  background?: string;
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  repeatCount?: number;
  children: ReactNode;
  className?: string;
  testid?: string;
}

export const Grid = ({
  background,
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  xl,
  repeatCount = 12,
  children,
  className,
  testid,
}: GridProps) => {
  const getClassNames = (
    container: boolean,
    item: boolean,
    sizes: {
      [key in BreakpointKey]?: number;
    },
    className?: string
  ) => {
    let classNames = [];

    if (container === true) {
      classNames.push("Grid__container");
    }

    if (item === true) {
      classNames.push("Grid__item");
    }

    for (let key in sizes) {
      let column = sizes[key as BreakpointKey];
      if (column === undefined) {
        continue;
      }

      classNames.push(`${key}-${column}`);
    }

    if (className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };

  return (
    <div
      className={getJoinedClassName("Grid", {
        className: getClassNames(
          container,
          item,
          {
            xs,
            sm,
            md,
            lg,
            xl,
          },
          className
        ),
      })}
      data-testid={testid}
      css={css`
        ${background && `background-color: ${background};`}
        ${container &&
        `
          grid-template-columns: repeat(${repeatCount}, 1fr);
        `}
      `}
    >
      {children}
    </div>
  );
};
