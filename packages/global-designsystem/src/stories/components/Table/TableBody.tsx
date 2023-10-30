import { ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Typography } from "../../foundation/Typography";
import { TableTbody } from "./styles";
import { TableCellBody } from "./TableCellBody";
import { TableEmptyBody } from "./TableEmptyBody";
import { TableRow } from "./TableRow";

export const TableBody = ({
  data,
  column,
  hover,
  stickyHeader,
  stickyHeight,
  emptyBody,
}: {
  data?: {
    id: string;
    [key: string]: string;
  }[];
  column: {
    id: string;
    label: string;
    bodyAlign?: "left" | "center" | "right";
  }[];
  hover: boolean;
  stickyHeader: boolean;
  stickyHeight: string;
  emptyBody?: ReactNode;
}) => {
  const theme = useTheme();

  return (
    <TableTbody
      hover={hover}
      stickyHeader={stickyHeader}
      stickyHeight={stickyHeight}
      theme={theme}
    >
      {data !== undefined && data.length > 0 ? (
        data.map((item) => (
          <TableRow stickyHeader={stickyHeader} key={item.id}>
            {column.map((col) => {
              let result = "";
              (Object.keys(item) as (keyof typeof item)[]).map(
                () => (result = item[col.id])
              );
              return (
                <TableCellBody key={col.id} stickyHeader={stickyHeader}>
                  <Typography
                    variant="body2"
                    color={theme.colors.text.sub}
                    textAlign={col.bodyAlign}
                  >
                    {result}
                  </Typography>
                </TableCellBody>
              );
            })}
          </TableRow>
        ))
      ) : emptyBody ? (
        <TableRow stickyHeader={true}>
          <TableCellBody stickyHeader={true}>{emptyBody}</TableCellBody>
        </TableRow>
      ) : (
        <TableEmptyBody stickyHeader={stickyHeader} />
      )}
    </TableTbody>
  );
};
