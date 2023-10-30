import { ColorOptions } from "./../../../modules/colors";
import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";

export const TableRoot = styled.table<{
  minWidth?: number;
  colors: ColorOptions;
  dense?: boolean;
  stickyHeader?: boolean;
}>`
  display: ${({ stickyHeader }) => (stickyHeader ? "block" : "table")};
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  th,
  td {
    border-bottom: 1px solid ${({ colors }) => colors.border};
    padding: ${({ dense }) => (dense ? "6px 16px" : "16px")};
  }
`;

export const TableTbody = styled.tbody<{
  hover: boolean;
  stickyHeader: boolean;
  stickyHeight: string;
  theme: ThemeOptions;
}>`
  display: ${({ stickyHeader }) =>
    stickyHeader ? "block" : "table-row-group"};
  overflow: auto;
  tr:last-child > td {
    border-bottom: 0px solid;
  }
  @media (hover: hover) {
    tr:hover {
      background-color: ${({ hover, theme }) =>
        hover ? theme.colors.gray[100] : "inherits"};
    }
  }
  height: ${({ stickyHeader, stickyHeight }) =>
    stickyHeader ? stickyHeight : "initial"};
`;

export const TableTd = styled.td<{
  stickyHeader?: boolean;
}>`
  display: table-cell;
  flex: ${({ stickyHeader }) => (stickyHeader ? "1" : "unset")};
`;

export const TableTh = styled.th<{
  stickyHeader?: boolean;
  headAlign?: "left" | "center" | "right";
}>`
  display: table-cell;
  flex: ${({ stickyHeader }) => (stickyHeader ? "1" : "unset")};
  text-align: ${({ headAlign }) =>
    headAlign === undefined ? "center" : headAlign};
`;

export const TableContainerRoot = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TableTfooter = styled.tfoot`
  display: table-header-group;
`;

export const TableThead = styled.thead<{
  headAlign?: string;
  stickyHeader?: boolean;
}>`
  display: ${({ stickyHeader }) =>
    stickyHeader ? "block" : "table-header-group"};
  text-align: ${({ headAlign }) => headAlign};
`;

export const TableTr = styled.tr<{
  stickyHeader?: boolean;
}>`
  display: ${({ stickyHeader }) => (stickyHeader ? "flex" : "table-row")};
  align-items: center;
  vertical-align: middle;
`;
