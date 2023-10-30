import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorOptions } from "src/modules/colors";
import { Typography } from "src/stories/foundation/Typography";
import { LoadingVariant } from "src/types";
import { motion } from "framer-motion/dist/framer-motion";

export const LOADING_CIRCLE_SIZE = 44;
const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const loadingAnimation = keyframes`
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 120px, 200px;
        stroke-dashoffset: -15px;
    } 
    100% {
        stroke-dasharray: 120px, 200px;
        stroke-dashoffset: -125px;
    }
`;

export const LoadingDiv = styled.div<{
  size: number;
}>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const LoadingSpan = styled.span<{
  colors: ColorOptions;
  variant: LoadingVariant;
  size: number;
}>`
  display: inline-block;
  color: ${({ colors }) => colors.gray[1000]};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  ${({ variant }) =>
    variant === "determinate"
      ? css`
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          transform: rotate(-90deg);
        `
      : css`
          animation: ${rotateAnimation} 1.4s linear infinite;
        `}
`;

export const LoadingSVG = styled.svg`
  display: block;
`;

const indeterminateAnimation = (disableShrink: boolean) => css`
  stroke-dasharray: 86px, 200px;
  stroke-dashoffset: 0;
  animation: ${disableShrink === true
    ? "none"
    : css`
        ${loadingAnimation} 1.4s ease-in-out infinite
      `};
`;

const determinateAnimation = (
  range: { min: number; max: number },
  value: number,
  strokeWidth: number,
  size: number
) => css`
  --circumference: ${(
    2 *
    Math.PI *
    ((LOADING_CIRCLE_SIZE - strokeWidth) / 2)
  ).toFixed(3)};
  --remainPercentage: ${(range.max - value) / (range.max - range.min)};

  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  stroke-dasharray: var(--circumference);
  stroke-dashoffset: calc(var(--remainPercentage) * var(--circumference));
`;

export const LoadingCircleFront = styled.circle<{
  variant: LoadingVariant;
  disableShrink: boolean;
  size: number;
  strokeWidth: number;
  range: { min: number; max: number };
  value: number;
  color: string;
}>`
  stroke: ${({ color }) => color};

  ${({ variant, disableShrink, range, value, strokeWidth, size }) =>
    variant === "determinate"
      ? determinateAnimation(range, value, strokeWidth, size)
      : indeterminateAnimation(disableShrink)}
`;

export const LoadingCircleBack = styled.circle<{
  color: string;
}>`
  stroke: ${({ color }) => color};
  stroke-dashoffset: 0;
`;

export const LoadingLabelTypography = styled(Typography)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const StyledLoadingWrapperDiv = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
