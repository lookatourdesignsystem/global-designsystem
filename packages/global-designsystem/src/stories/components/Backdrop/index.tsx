import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledBackdropDiv } from "./styles";
import { useTheme } from "src/hooks/useTheme";

export interface BackdropProps {
  disableBackdropClose?: boolean;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  testid?: string;
}

export const Backdrop = ({
  disableBackdropClose,
  color,
  children,
  onClick,
  className,
  testid,
}: BackdropProps) => {
  const theme = useTheme();
  const handleClickBackDrop = () => {
    if (disableBackdropClose === true) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledBackdropDiv
      className={getJoinedClassName("Backdrop", {
        className,
      })}
      color={color || theme.colors.background.dim}
      onClick={handleClickBackDrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      }}
      data-testid={testid}
    >
      {children}
    </StyledBackdropDiv>
  );
};
