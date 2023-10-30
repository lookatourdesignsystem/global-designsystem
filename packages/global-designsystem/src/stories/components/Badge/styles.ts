import styled from "@emotion/styled";
import { BadgeVariant, ShapeType } from "../../../types";

export const StyledBadgeWrapperDiv = styled.div<{
  shape: "square" | "round";
  width?: string;
}>`
  position: relative;
  border-radius: ${({ shape }) => (shape === "round" ? "50%" : "0")};
  width: ${({ width }) => width || "fit-content"};
`;

export const StyledBadgeDiv = styled.div<{
  shape?: ShapeType;
  variant?: BadgeVariant;
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
  position?: "in" | "out";
  background: string;
  length: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: ${({ variant }) => (variant === "dot" ? 4 : 12)}px;
  background-color: ${({ background }) => background};

  ${({ variant, length }) =>
    variant === "dot"
      ? `
        width: 8px;
        height: 8px;
        `
      : length === 1
      ? `
        width: 18px;
        height: 18px;
        `
      : `
        height: 18px;
        padding: 0px 6px;
        `}

  --shapePosition : ${({ shape }) => (shape === "round" ? "14%" : 0)};

  ${({ horizontal }) =>
    horizontal === "right"
      ? `right: var(--shapePosition);`
      : `left: var(--shapePosition);`}

  ${({ vertical }) =>
    vertical === "top"
      ? `top: var(--shapePosition);`
      : `bottom: var(--shapePosition);`}

  ${({ horizontal, vertical, position, shape }) =>
    position === "out" &&
    shape !== undefined &&
    `transform: translate(${horizontal === "left" ? "-50%" : "50%"}, ${
      vertical === "top" ? "-50%" : "50%"
    });
    transform-origin: ${horizontal === "left" ? "0%" : "100%"} ${
      vertical === "top" ? "0%" : "100%"
    };
    `}
`;
