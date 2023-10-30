import { TableThead } from "./styles";
import { TableCellHead } from "./TableCellHead";
import { TableRow } from "./TableRow";

export const TableHead = ({
  column,
  borderColor,
  stickyHeader,
}: {
  column: {
    id: string;
    label: string;
    headAlign?: "left" | "center" | "right";
  }[];
  borderColor?: string;
  stickyHeader?: boolean;
}) => {
  return (
    <TableThead stickyHeader={stickyHeader}>
      <TableRow stickyHeader={stickyHeader}>
        {column &&
          column.map(({ id, label, headAlign }) => {
            return (
              <TableCellHead
                key={id}
                label={label}
                stickyHeader={stickyHeader}
                headAlign={headAlign}
              />
            );
          })}
      </TableRow>
    </TableThead>
  );
};
