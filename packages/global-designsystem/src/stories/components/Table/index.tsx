import { TableBody } from "./TableBody";
import { TableContainer } from "./TableContainer";
import { TableFooter } from "./TableFooter";
import { TableHead } from "./TableHead";
import { TableRoot } from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { ReactNode } from "react";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
export interface TableProps {
  data?: {
    id: string;
    [key: string]: any;
  }[];
  column: {
    id: string;
    label: string;
    headAlign?: "left" | "center" | "right";
    bodyAlign?: "left" | "center" | "right";
  }[];
  hover?: boolean;
  dense?: boolean;
  stickyHeader?: boolean;
  stickyHeight?: string;
  emptyBody?: ReactNode;
  className?: string;
  testid?: string;
}

export const Table = ({
  column,
  data,
  stickyHeight = "300px",
  hover = false,
  dense = false,
  stickyHeader = true,
  emptyBody,
  className,
  testid,
}: TableProps) => {
  const theme = useTheme();
  return (
    <TableContainer
      className={getJoinedClassName("Table", {
        className: className,
      })}
      data-testid={testid}
    >
      <TableRoot
        dense={dense}
        stickyHeader={stickyHeader}
        colors={theme.colors}
      >
        <TableHead column={column} stickyHeader={stickyHeader} />
        <TableBody
          data={data}
          column={column}
          hover={hover}
          stickyHeader={stickyHeader}
          stickyHeight={stickyHeight}
          emptyBody={emptyBody}
        />
        <TableFooter />
      </TableRoot>
    </TableContainer>
  );
};
