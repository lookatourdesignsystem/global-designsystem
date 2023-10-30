import { ReactNode } from "react";
import { TableTr } from "./styles";

export const TableRow = ({
  children,
  stickyHeader,
}: {
  children?: ReactNode;
  stickyHeader?: boolean;
}) => {
  return <TableTr stickyHeader={stickyHeader}>{children}</TableTr>;
};
