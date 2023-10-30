import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { TableTh } from "./styles";

export const TableCellHead = ({
  label,
  stickyHeader,
  headAlign,
}: {
  label: string;
  stickyHeader?: boolean;
  headAlign?: "left" | "center" | "right";
}) => {
  const theme = useTheme();
  return (
    <TableTh stickyHeader={stickyHeader} headAlign={headAlign}>
      <Typography variant="caption1" color={theme.colors.text.low}>
        {label}
      </Typography>
    </TableTh>
  );
};
