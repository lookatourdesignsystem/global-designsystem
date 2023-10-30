import styled from "@emotion/styled";
import { ThemeOptions } from "src/modules/defaultTheme";

export const StyledAvatarDiv = styled.div<{
  theme: ThemeOptions;
  backgroundColor?: string;
  circleSize: number;
  borderRadius: string | number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius};
  overflow: hidden;
  user-select: none;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.text.main};
`;

export const StyledAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;
