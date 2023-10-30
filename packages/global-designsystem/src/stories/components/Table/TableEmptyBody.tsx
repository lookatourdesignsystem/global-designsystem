import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { TableCellBody } from "./TableCellBody";
import { TableRow } from "./TableRow";

export const TableEmptyBody = ({
  stickyHeader,
}: {
  stickyHeader?: boolean;
}) => {
  const theme = useTheme();
  return (
    <TableRow stickyHeader={true}>
      <TableCellBody stickyHeader={true}>
        <Typography
          variant="body2"
          color={theme.colors.text.sub}
          textAlign="center"
        >
          No data available in table
        </Typography>
      </TableCellBody>
    </TableRow>
  );
};
