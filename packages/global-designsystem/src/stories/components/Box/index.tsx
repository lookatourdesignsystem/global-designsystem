import { forwardRef, ReactNode, MouseEvent, ElementType } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { BorderRadiusMultiple, SpacingMultiple } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledDiv } from "./styles";

export interface BoxProps {
  id?: string;
  border?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  borderRadius?: BorderRadiusMultiple;
  color?: string;
  background?: string;
  p?: SpacingMultiple | 0;
  pt?: SpacingMultiple | 0;
  pr?: SpacingMultiple | 0;
  pb?: SpacingMultiple | 0;
  pl?: SpacingMultiple | 0;
  className?: string;
  as?: ElementType;
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
  testid?: string;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      id,
      className,
      as = "div",
      background = "",
      border = "",
      borderRadius = "0",
      width = "",
      height = "",
      maxWidth = "",
      minWidth = "",
      color = "",
      p = 0,
      pt = 0,
      pr = 0,
      pb = 0,
      pl = 0,
      children,
      onClick,
      testid,
    }: BoxProps,
    ref
  ) => {
    const theme = useTheme();

    return (
      <StyledDiv
        as={as}
        id={id}
        className={getJoinedClassName("Box", {
          className,
        })}
        onClick={onClick}
        ref={ref}
        theme={theme}
        // TODO : emotion에서 spacing prop을 바로 DOM에 pass해서 HTML attribute로 넣어지는 이슈가 있어 theme prop 넘기는 것으로 수정했다.
        // spacing={theme.spacing}
        width={width}
        height={height}
        maxWidth={maxWidth}
        minWidth={minWidth}
        border={border}
        color={color}
        background={background}
        borderRadius={borderRadius}
        p={p}
        pr={pr}
        pt={pt}
        pl={pl}
        pb={pb}
        data-testid={testid}
      >
        {children}
      </StyledDiv>
    );
  }
);
