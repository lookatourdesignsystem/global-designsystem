import { css } from "@emotion/react";
import { ReactNode } from "react";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface ContainerProps {
  full?: boolean;
  className?: string;
  children: ReactNode;
  testid?: string;
}

export const Container = ({
  full = false,
  className,
  children,
  testid,
}: ContainerProps) => {
  return (
    <div
      className={getJoinedClassName("Container", {
        className,
      })}
      css={css`
        ${full && `max-width: 100%;`}
      `}
      data-testid={testid}
    >
      {children}
    </div>
  );
};
