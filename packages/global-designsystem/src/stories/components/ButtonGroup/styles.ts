import { SizeType } from "../../../types/index";
import styled from "@emotion/styled";
import { Button } from "../Button";

export const StyledButtonGroupDiv = styled.div<{
  direction: "horizontal" | "vertical";
  size?: "s" | "m" | "l";
  icon: boolean;
  fullWidth: boolean;
  width?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  width: ${({ width, direction }) =>
    width && direction === "horizontal" ? width : "fit-content"};

  ${({ direction }) =>
    direction === "horizontal" ? "overflow-x: auto" : "overflow-y: auto"};

  ${({ fullWidth, direction }) =>
    fullWidth &&
    direction === "horizontal" &&
    "width: 100%; & > button { flex: 1; }"}
`;

export const StyledButton = styled(Button)<{
  direction: "horizontal" | "vertical";
  size: SizeType;
  icon: boolean;
}>`
  ${({ direction, icon, size }) =>
    direction === "horizontal"
      ? `
  &:not(:first-of-type) {
    margin-left: -1px;
    border-left: 1px solid transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    ${icon && `padding: ${size === "l" ? 15 : 7}px;`};
  }
  &:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  `
      : `
  &:not(:first-of-type) {
    margin-top: -1px;
    border-top: 1px solid transparent;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    ${icon && `padding: ${size === "l" ? 15 : 7}px;`};
  }
  &:not(:last-of-type) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  `}
`;
