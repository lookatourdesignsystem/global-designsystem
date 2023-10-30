import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { AlignType, SerialFieldState } from "../../../types";
import { Typography } from "../../foundation/Typography";

export const StyledSerialFieldContainerDiv = styled.div`
  width: 100%;
  position: relative;
  min-width: 42px;
  max-width: 320px;
`;

const CursorAnimation = keyframes`
  0% {

  }
  50%{
    opacity:1;
  }
  to{
    opacity:0;
  }
`;

const FadeOut = keyframes`
  to { visibility: hidden; }
`;

const FadeIn = keyframes`
  to { visibility: visible; }
`;

export const StyledSerialListDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  & > * + * {
    margin-left: 4px;
  }
`;

export const StyledSerialItemDiv = styled.div<{
  theme: ThemeOptions;
  isFocused: boolean;
  cursorPosition: AlignType;
  masking: boolean;
  state?: SerialFieldState;
  isValue?: boolean;
}>`
  height: 56px;
  width: 100%;
  min-width: 42px;
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius[200]}px;
  padding: 16px 0;
  position: relative;
  border-style: solid;
  border-width: ${({ isFocused }) => (isFocused ? 2 : 1)}px;
  border-color: ${({ theme, isFocused, state, isValue }) =>
    isFocused
      ? theme.colors.primary.main
      : state === "error"
      ? theme.colors.system.error.main
      : state === "success"
      ? theme.colors.system.success.main
      : state === "disabled"
      ? theme.colors.gray[300]
      : isValue
      ? theme.colors.text.main
      : theme.colors.border};

  @media (hover: hover) {
    &:hover {
      cursor: text;
    }
  }

  &:after {
    animation: ${CursorAnimation} 1s ease-in-out infinite;
    border-left: 1px solid
      ${({ theme, isFocused }) =>
        isFocused ? theme.colors.gray[1000] : "transparent"};
    bottom: 20%;
    content: "";
    position: absolute;
    top: 20%;
    ${({ cursorPosition }) =>
      cursorPosition === "center"
        ? "right: calc(50% - 1px)"
        : cursorPosition === "right"
        ? "right: 23.4%"
        : cursorPosition === "left" && "left: 23.4%"};
  }
`;

export const StyledSerialFieldInput = styled.input`
  caret-color: transparent;
  overflow: visible;
  height: 100%;
  width: 100%;
  margin: 0;
  position: absolute;
  background: transparent;
  color: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const StyledSerialTypography = styled(Typography)<{
  theme: ThemeOptions;
  state?: SerialFieldState;
}>`
  color: ${({ theme, state }) =>
    state === "disabled" ? theme.colors.gray[400] : theme.colors.gray[1000]};
`;

export const StyledMaskingSpan = styled.span<{
  theme: ThemeOptions;
  state?: SerialFieldState;
}>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, state }) =>
    state === "error"
      ? theme.colors.system.error.main
      : state === "success"
      ? theme.colors.system.success.main
      : state === "disabled"
      ? theme.colors.gray[400]
      : theme.colors.gray[1000]};
`;

export const StyledMaskingContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledFadeDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFadeInDiv = styled(StyledFadeDiv)<{ maskingDelay: number }>`
  visibility: hidden;
  animation: ${FadeIn} 0s ${({ maskingDelay }) => maskingDelay / 1000}s forwards;
`;

export const StyledFadeOutDiv = styled(StyledFadeDiv)<{ maskingDelay: number }>`
  visibility: visible;
  animation: ${FadeOut} 0s ${({ maskingDelay }) => maskingDelay / 1000}s
    forwards;
`;
