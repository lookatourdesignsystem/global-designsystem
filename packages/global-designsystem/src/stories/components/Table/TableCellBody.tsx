import { ReactNode } from "react";
import { TableTd } from "./styles";

export const TableCellBody = ({
  stickyHeader,
  children,
}: {
  children?: ReactNode;
  stickyHeader?: boolean;
}) => {
  return <TableTd stickyHeader={stickyHeader}>{children}</TableTd>;
};
