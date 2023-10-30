import styled from "@emotion/styled";

export const Navigation = styled.nav``;

export const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const PaginationItem = styled.li`
  display: list-item;
`;

export const PaginationButton = styled.button<{
  selected?: boolean;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  vertical-align: middle;
  border-radius: 16px;
  text-align: center;
  min-width: 32px;
  height: 32px;
  padding: 0px 6px;
  margin: 0px 3px;
  background-color: ${({ selected, color }) =>
    selected ? color : "rgba (0, 0, 0, 0.12)"};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (hover: hover) {
    &:hover {
      background-color: ${({ selected, color }) =>
        selected ? `${color}60` : "rgba(0, 0, 0, 0.04)"};
    }
  }
  &:disabled {
    cursor: default;
    background-color: transparent;
  }
`;

export const PageInfoText = styled.span``;
