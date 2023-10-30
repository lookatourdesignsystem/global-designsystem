import styled from "@emotion/styled";

export const StyledHr = styled.hr<{
  borderColor: string;
  stroke: number;
  length?: string;
}>`
  border-width: 0;
  background-color: ${({ borderColor }) => borderColor};

  &.horizontal {
    width: ${({ length }) => (length ? length : "100%")};
    height: ${({ stroke }) => stroke}px;
  }

  &.vertical {
    width: ${({ stroke }) => stroke}px;
    height: ${({ length }) => (length ? length : "inherit")};
    ${({ length }) => length === undefined && `align-self: stretch;`};
  }
`;
