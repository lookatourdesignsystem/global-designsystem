import { ReactNode } from "react";
import { TableContainerRoot } from "./styles";

export const TableContainer = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <TableContainerRoot className={className}>{children}</TableContainerRoot>
  );
};
