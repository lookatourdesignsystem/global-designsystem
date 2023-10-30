import { ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledListButton, StyledListButtonChildrenDiv } from "./styles";
import { Stack } from "../Stack";
export interface ListButtonProps {
  children: ReactNode;
  value?: string | number;
  onClick?: any;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  testid?: string;
}

export const ListButton = ({
  children,
  value,
  onClick,
  selected = false,
  className,
  disabled = false,
  testid,
}: ListButtonProps) => {
  const theme = useTheme();

  return (
    <StyledListButton
      className={getJoinedClassName("ListButton", {
        className,
      })}
      type="button"
      theme={theme}
      selected={selected}
      isClickable={typeof onClick === "function"}
      value={value}
      onClick={onClick}
      disabled={disabled}
      data-testid={testid}
    >
      <Stack spacing="200" direction="row-reverse" width="100%">
        <StyledListButtonChildrenDiv>{children}</StyledListButtonChildrenDiv>
      </Stack>
    </StyledListButton>
  );
};
