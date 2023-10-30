import { useTheme } from "../../../hooks/useTheme";
import { SpacingMultiple } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledDiv } from "./styles";

export interface SpacerProps {
  flexGrow?: number;
  y?: SpacingMultiple | 0;
  x?: SpacingMultiple | 0;
  className?: string;
  testid?: string;
}

export const Spacer = ({
  flexGrow = 0,
  y = 0,
  x = 0,
  className,
  testid,
}: SpacerProps) => {
  // flex를 사용하는 방식으로 바꿔야함
  const theme = useTheme();

  return (
    <StyledDiv
      className={getJoinedClassName("Spacer", {
        className,
      })}
      flexGrow={flexGrow}
      x={x}
      y={y}
      theme={theme}
      data-testid={testid}
    />
  );
};
