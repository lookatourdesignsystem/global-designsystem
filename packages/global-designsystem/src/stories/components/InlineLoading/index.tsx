import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { useTheme } from "../../../hooks/useTheme";
import { InlineLoadingColor } from "../../../types";
import { StyledInlineLoadingDiv, StyledInlineLoadingItemDiv } from "./styles";

export interface InlineLoadingProps {
  color?: InlineLoadingColor;
  className?: string;
  testid?: string;
}

export const InlineLoading = ({
  color = "default",
  className,
  testid,
}: InlineLoadingProps) => {
  const theme = useTheme();
  const dotColor =
    color === "primary"
      ? theme.colors.primary.main
      : color === "default"
      ? theme.colors.gray[1000]
      : theme.colors.system[color].main;

  return (
    <StyledInlineLoadingDiv
      className={getJoinedClassName("InlineLoading", {
        className: className,
      })}
      color={dotColor}
      data-testid={testid}
    >
      <StyledInlineLoadingItemDiv />
      <StyledInlineLoadingItemDiv />
      <StyledInlineLoadingItemDiv />
      <StyledInlineLoadingItemDiv />
    </StyledInlineLoadingDiv>
  );
};
