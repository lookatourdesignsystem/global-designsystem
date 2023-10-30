import { ThemeOptions } from "../../../modules/defaultTheme";
import styled from "@emotion/styled";

export const StyledListButton = styled.button<{
  theme: ThemeOptions;
  selected: boolean;
  disabled: boolean;
  isClickable: boolean;
}>`
  padding: ${({ theme }) => `${theme.spacing[200]}px`};
  cursor: pointer;
  text-align: left;
  border-radius: ${({ theme }) => theme.spacing[200]}px;
  box-sizing: content-box;
  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.3;
  }

  ${({ isClickable, theme }) =>
    isClickable === true
      ? `
      &:active,
      &:not([disabled]):not([tabindex="-1"]):active {
        background-color: ${theme.colors.interactive.pressed2};
      }
      @media (hover: hover) {
        &:hover {
          background-color: ${theme.colors.interactive.pressed1};
        }
      }
	    `
      : `
      pointer-events: none;
  `}

  ${({ selected, theme }) =>
    selected === true &&
    `
      pointer-events: none;
      background-color: ${theme.colors.component.list.selected};
      border: 1px solid ${theme.colors.primary.main};
      padding: ${theme.spacing[200] - 1}px;
	`}
`;

export const StyledListButtonImageDiv = styled.div<{
  backgroundColor: string;
}>`
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
  position: relative;
  width: 36px;
  height: 36px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListButtonChildrenDiv = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
