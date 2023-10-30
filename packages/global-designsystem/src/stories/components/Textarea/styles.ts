import styled from "@emotion/styled";
import { Property } from "csstype";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { TextFieldState } from "../../../types";

export const StyledTextareaContainer = styled.div<{ theme: ThemeOptions }>`
  font-family: ${({ theme }) => theme.typography.fonts.default.fontFamily};
`;

export const StyledTextareaLabel = styled.label<{ marginBottom: number }>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const StyledTextareaDiv = styled.div<{
  theme: ThemeOptions;
  state?: TextFieldState;
  height: string;
  textAlign: Property.TextAlign;
  disabled?: boolean;
}>`
  display: block;
  width: 100%;
  height: 100%;
  height: ${({ height }) => height};
  overflow: auto;
  padding: 16px;
  border-radius: ${({ theme }) => theme.shape.borderRadius[200]}px;
  outline: none;
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: 700;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.main};
  -webkit-appearance: none;
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, state, disabled }) =>
    disabled
      ? theme.colors.text.disabled
      : state === "error"
      ? theme.colors.system.error.main
      : state === "success"
      ? theme.colors.system.success.main
      : theme.colors.border};

  &:empty:before {
    content: "​";
  }

  &:not(:empty) {
    border-color: ${({ theme, state, disabled }) =>
      disabled
        ? theme.colors.text.disabled
        : state === "error"
        ? theme.colors.system.error.main
        : state === "success"
        ? theme.colors.system.success.main
        : theme.colors.text.main};
  }

  &[placeholder]:empty:before {
    content: attr(placeholder);
    color: ${({ theme }) => theme.colors.text.verylow};
    font-weight: ${({ theme }) =>
      theme.typography.fonts.default.variant.body1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.fonts.default.variant.body1.lineHeight};
    font-size: ${({ theme }) =>
      theme.typography.fonts.default.variant.body1.fontSize};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    border-width: 2px;
    padding: ${({ theme }) => theme.spacing[400] - 1}px;
  }

  ${({ theme, disabled }) =>
    disabled &&
    `
    &[placeholder]:empty:before {
      content: attr(placeholder);
      color: ${theme.colors.text.disabled};
    }
    `};
`;
