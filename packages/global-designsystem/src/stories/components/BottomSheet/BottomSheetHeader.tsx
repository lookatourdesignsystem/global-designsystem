import { CloseFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Fragment, ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { TypoVariant } from "../../../types";
import { Typography } from "../../foundation/Typography";
import { Button } from "../Button";
import { StyledBottomSheetHeaderDiv, StyledTruncateTypoDiv } from "./styles";

export const BottomSheetHeader = ({
  title,
  titleVariant,
  hideCloseButton,
  icon,
  iconSize,
  header,
  onClose,
  ...props
}: {
  title?: string;
  titleVariant?: TypoVariant;
  hideCloseButton?: boolean;
  icon?: ReactNode;
  iconSize?: number;
  header?: ReactNode;
  onClose?: () => void;
}) => {
  const theme = useTheme();

  return (
    <Fragment>
      <StyledBottomSheetHeaderDiv
        {...props}
        theme={theme}
        className="BottomSheetHeader"
      >
        {header !== undefined ? (
          header
        ) : (
          <Fragment>
            <StyledTruncateTypoDiv>
              <Typography variant={titleVariant} color={theme.colors.text.main}>
                {title}
              </Typography>
            </StyledTruncateTypoDiv>
            {hideCloseButton !== true && (
              <Button
                icon
                onClick={onClose}
                borderRadius="circle"
                size="s"
                className="BottomSheetCloseButton"
              >
                {icon ? (
                  icon
                ) : (
                  <CloseFilledIcon
                    fontSize={iconSize || 24}
                    color={theme.colors.gray[1000]}
                  />
                )}
              </Button>
            )}
          </Fragment>
        )}
      </StyledBottomSheetHeaderDiv>
    </Fragment>
  );
};
