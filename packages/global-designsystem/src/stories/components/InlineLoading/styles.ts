import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const LdsEllipsis1 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const LdsEllipsis2 = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(12px, 0);
    }
`;

const LdsEllipsis3 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

export const StyledInlineLoadingDiv = styled.div<{
  color: string;
}>`
  margin: 0 auto;
  position: relative;
  width: 36px;
  height: 20px;

  & > div {
    background-color: ${({ color }) => color};
  }
`;

export const StyledInlineLoadingItemDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  width: 6px;
  height: 6px;
  top: 7px;

  &:nth-of-type(1) {
    left: 4px;
    animation: ${LdsEllipsis1} 0.6s infinite;
  }
  &:nth-of-type(2) {
    left: 4px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  &:nth-of-type(3) {
    left: 16px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  &:nth-of-type(4) {
    left: 28px;
    animation: ${LdsEllipsis3} 0.6s infinite;
  }
`;
