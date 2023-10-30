import styled from "@emotion/styled";
import { ThemeOptions } from "./../../../modules/defaultTheme";
import { BoxProps } from ".";

export const StyledDiv = styled.div<BoxProps & { theme: ThemeOptions }>`
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ background }) => background && `background: ${background}`};
  ${({ borderRadius, theme }) =>
    borderRadius &&
    `border-radius: ${
      typeof theme.shape.borderRadius[borderRadius] === "number"
        ? `${theme.shape.borderRadius[borderRadius]}px`
        : theme.shape.borderRadius[borderRadius]
    }`};
  ${({ p, theme }) => p && `padding: ${theme.spacing[p]}px`};
  ${({ pr, theme }) => pr && `padding-right: ${theme.spacing[pr]}px`};
  ${({ pl, theme }) => pl && `padding-left:${theme.spacing[pl]}px`};
  ${({ pt, theme }) => pt && `padding-top:${theme.spacing[pt]}px`};
  ${({ pb, theme }) => pb && `padding-bottom:${theme.spacing[pb]}px`};
`;
