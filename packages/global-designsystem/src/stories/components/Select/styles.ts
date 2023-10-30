import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { Stack } from "../Stack";

export const StyledSelectContainerStack = styled(Stack)<{
  theme: ThemeOptions;
  error?: boolean;
  size: "l" | "m" | "s";
  selected: boolean;
  disabled?: boolean;
  isValue: boolean;
}>`
  --borderWidth: ${({ selected }) => (selected ? 2 : 1)}px;

  height: ${({ theme, size }) => theme.size[size]}px;
  box-sizing: border-box;
  border-width: var(--borderWidth);
  border-style: solid;
  border-color: ${({ theme, error, selected, isValue }) =>
    selected
      ? theme.colors.primary.main
      : error
      ? theme.colors.system.error.main
      : isValue
      ? theme.colors.gray[400]
      : theme.colors.border};
  border-radius: ${({ theme }) => theme.shape.borderRadius[200]}px;
  padding: 0
    calc(${({ size }) => (size === "l" ? 16 : 12)}px - var(--borderWidth));
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.global};
  opacity: ${({ disabled }) => (disabled === true ? 0.3 : 1)};
`;

export const StyledLabelDiv = styled(Stack)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
`;

export const StyledHiddenInput = styled.input`
  display: none;
  opacity: 0;
`;
