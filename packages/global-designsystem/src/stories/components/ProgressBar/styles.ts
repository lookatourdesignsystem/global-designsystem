import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ProgressBarVariant } from "../../../types";

const TRANSITION_DURATION = 0.4;

const indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;

export const ProgressBarSpan = styled.span<{
  backgroundColor: string;
  variant: ProgressBarVariant;
}>`
  position: relative;
  overflow: hidden;
  display: block;
  height: 8px;
  z-index: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ProgressBarMainBarSpan = styled.span<{
  color: string;
  variant: ProgressBarVariant;
  range: { min: number; max: number };
  value: number;
}>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  transition: transform 0.2s linear;
  transform-origin: left;
  background-color: ${({ color }) => color};

  --percentage: ${({ value, range }) =>
    (((value - range.min) / (range.max - range.min)) * 100 - 100).toFixed(3)}%;

  ${({ variant }) =>
    variant === "determinate"
      ? css`
          transition: transform ${TRANSITION_DURATION}s linear;
          transform: translateX(var(--percentage));
        `
      : variant === "indeterminate"
      ? css`
          width: auto;
          animation: ${indeterminate1Keyframe} 2.1s
            cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        `
      : ``};
`;

export const ProgressBarSubBarSpan = styled.span<{
  color: string;
  variant: ProgressBarVariant;
  range: { min: number; max: number };
}>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  transition: transform 0.2s linear;
  transform-origin: left;

  ${({ color }) =>
    css`
      background-color: ${color};
    `};

  ${({ variant, color }) =>
    variant === "indeterminate" &&
    css`
      background-color: ${color};
      width: auto;
      animation: ${indeterminate2Keyframe} 2.1s
        cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    `};
`;
