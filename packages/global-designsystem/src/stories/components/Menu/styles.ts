import styled from "@emotion/styled";
import { Stack } from "../Stack";

export const StyledMenuWrapperDiv = styled.div`
  position: relative;
  width: fit-content;
`;

export const StyledMenuStack = styled(Stack)<{
  borderColor: string;
  backgroundColor: string;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "bottom";
  assetHeight: number;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  width: fit-content;
  padding: 4px;
  position: absolute;

  ${({ horizontal }) =>
    horizontal === "center"
      ? `
        right: 50%;
        transform: translateX(50%);
      `
      : horizontal === "left"
      ? `right: 0;`
      : horizontal === "right"
      ? `left: 0;`
      : ``}

  ${({ vertical, assetHeight }) =>
    vertical === "top"
      ? `bottom: ${assetHeight}px`
      : vertical === "bottom"
      ? `top: ${assetHeight}px`
      : `top: ${assetHeight > 0 ? assetHeight : 0}px`}
`;

export const StyledBackdropDiv = styled.div<{ color: string }>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;
