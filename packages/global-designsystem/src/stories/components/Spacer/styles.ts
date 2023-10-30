import { ThemeOptions } from "./../../../modules/defaultTheme";
import styled from "@emotion/styled";
import { SpacingMultiple } from "../../../types";

export const StyledDiv = styled.div<{
  flexGrow?: number;
  y: SpacingMultiple | 0;
  x: SpacingMultiple | 0;
  theme: ThemeOptions;
}>`
  ${({ flexGrow }) => flexGrow !== undefined && `flex-grow: ${flexGrow}`};
  ${({ theme, x }) => x !== 0 && `width: ${theme.spacing[x]}px`};
  ${({ theme, y }) => y !== 0 && `height: ${theme.spacing[y]}px`};
  ${({ x, y }) => (x !== 0 || y !== 0) && `flex-shrink: 0;`};
`;
