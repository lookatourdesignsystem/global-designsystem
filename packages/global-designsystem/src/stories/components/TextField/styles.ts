import styled from "@emotion/styled";
import { Property } from "csstype";
import { ThemeOptions } from "../../../modules/defaultTheme";
import {
  TextFieldAssetPosition,
  TextFieldInputType,
  TextFieldState,
} from "../../../types";

export const StyledTextFieldContainer = styled.div``;

export const StyledTextFieldLabel = styled.label<{ marginBottom: number }>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const StyledTextFieldDiv = styled.div`
  position: relative;
`;

export const StyledTextFieldInput = styled.input<{
  theme: ThemeOptions;
  type: TextFieldInputType;
  state?: TextFieldState;
  textAlign: Property.TextAlign;
  assetPosition: TextFieldAssetPosition;
  assetWidth: number;
  disabled: boolean;
  sizeType: "s" | "m" | "l";
}>`
  /*  reset */
  &[type="search"]::-ms-clear,
  &[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  /*  // reset */
  --padding: ${({ sizeType }) => (sizeType === "l" ? 16 : 12)}px;

  display: block;
  width: 100%;
  height: ${({ theme, sizeType }) => theme.size[sizeType]}px;
  padding: 0 var(--padding);
  ${({ assetPosition, assetWidth, theme }) =>
    assetWidth > 0 &&
    `padding-${assetPosition === "left" ? "left" : "right"} : ${
      theme.spacing[500] + 4 + assetWidth
    }px`};
  text-indent: ${({ assetPosition, theme }) =>
    assetPosition === "left" ? theme.spacing[100] : 0}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius[200]}px;
  outline: none;
  box-sizing: border-box;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.colors.text.main};
  background-color: transparent;
  -webkit-appearance: none;
  position: relative;
  border-width: 1px;
  border-style: solid;

  border-color: ${({ theme, state }) =>
    state === "error"
      ? theme.colors.system.error.main
      : state === "success"
      ? theme.colors.system.success.main
      : theme.colors.text.main};

  &:placeholder-shown {
    border-color: ${({ theme, state }) =>
      state === "error"
        ? theme.colors.system.error.main
        : state === "success"
        ? theme.colors.system.success.main
        : theme.colors.border};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.verylow};
    font-family: ${({ theme }) => theme.typography.fonts.default};
    font-size: ${({ theme, sizeType }) =>
      sizeType === "s"
        ? theme.typography.fonts.default.variant.body2.fontSize
        : theme.typography.fonts.default.variant.body1.fontSize};
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    border-width: 2px;
    padding: 0 calc(var(--padding) - 1px);
    ${({ assetPosition, assetWidth, theme }) =>
      assetWidth > 0 &&
      `padding-${assetPosition === "left" ? "left" : "right"} : ${
        theme.spacing[500] + 3 + assetWidth
      }px`};
  }
  &:disabled,
  &:disabled::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    border-color: ${({ theme }) => theme.colors.text.disabled};
  }
`;

export const StyledAssetContainerDiv = styled.div<{
  theme: ThemeOptions;
  assetPosition: TextFieldAssetPosition;
}>`
  position: absolute;
  top: 50%;
  ${({ assetPosition, theme }) =>
    assetPosition === "left"
      ? `left : ${theme.spacing[400]}px`
      : `right : ${theme.spacing[400]}px`};
  transform: translateY(-50%);
`;
