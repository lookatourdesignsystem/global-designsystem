import { ReactNode, useRef, useEffect, useCallback } from "react";
import { StyledClickAwayListenerDiv } from "./styles";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface ClickAwayListenerProps {
  children: ReactNode;
  onClickAway: () => void;
  mouseEvent?:
    | "click"
    | "mousedown"
    | "mouseup"
    | "pointerdown"
    | "pointerup"
    | false;
  touchEvent?: "touchend" | "touchstart" | false;
  className?: string;
  testid?: string;
}

export const ClickAwayListener = ({
  children,
  onClickAway,
  mouseEvent = "click",
  touchEvent = "touchend",
  className,
  testid,
}: ClickAwayListenerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickAway = useCallback(
    (e) => {
      if (wrapperRef.current?.contains(e.target as HTMLElement)) {
        return;
      }
      onClickAway();
    },
    [onClickAway]
  );

  useEffect(() => {
    if (touchEvent !== false) {
      document.addEventListener(touchEvent, handleClickAway, true);
      return () => {
        document.removeEventListener(touchEvent, handleClickAway, true);
      };
    }
  }, [handleClickAway, touchEvent]);

  useEffect(() => {
    if (mouseEvent !== false) {
      document.addEventListener(mouseEvent, handleClickAway, true);
      return () => {
        document.removeEventListener(mouseEvent, handleClickAway, true);
      };
    }
  }, [handleClickAway, mouseEvent]);

  return (
    <StyledClickAwayListenerDiv
      className={getJoinedClassName("ClickAwayListener", {
        className,
      })}
      ref={wrapperRef}
      data-testid={testid}
    >
      {children}
    </StyledClickAwayListenerDiv>
  );
};
