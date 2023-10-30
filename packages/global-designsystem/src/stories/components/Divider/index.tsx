import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledHr } from "./styles";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  stroke?: number;
  length?: string;
  className?: string;
  testid?: string;
}

export const Divider = ({
  orientation = "horizontal",
  stroke = 1,
  length,
  className,
  testid,
}: DividerProps) => {
  const theme = useTheme();

  const getClassNames = (
    orientation: "horizontal" | "vertical",
    className?: string
  ) => {
    let classNames = [];

    if (orientation) {
      classNames.push(orientation);
    }

    if (className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };

  return (
    <StyledHr
      className={getJoinedClassName("Divider", {
        className: getClassNames(orientation, className),
      })}
      borderColor={theme.colors.border}
      stroke={stroke}
      length={length}
      data-testid={testid}
    />
  );
};
