import { css } from "@emotion/react";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from "overlayscrollbars-react";
import { forwardRef } from "react";

export interface OverlayScrollbarProps extends OverlayScrollbarsComponentProps {
  width?: string;
  height?: string;
  className?: string;
  testid?: string;
}

export const OverlayScrollbar = forwardRef<any, OverlayScrollbarProps>(
  (
    {
      className,
      element,
      options = {
        scrollbars: { autoHide: "scroll" },
      },
      events,
      defer,
      width,
      height,
      children,
      testid,
    },
    ref
  ) => {
    const thumbStyle = css`
      ${width && `width: ${width}`};
      ${height && `height: ${height}`};
    `;
    return (
      <OverlayScrollbarsComponent
        className={getJoinedClassName("OverlayScrollbar", {
          className,
        })}
        ref={ref}
        element={element}
        options={options}
        events={events}
        defer={defer}
        css={thumbStyle}
        data-testid={testid}
      >
        {children}
      </OverlayScrollbarsComponent>
    );
  }
);
