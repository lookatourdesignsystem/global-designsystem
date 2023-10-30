import { CloseFilledIcon } from "@lookatourdesignsystem/icons-library";
import { Fragment, ReactNode } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { TypoVariant } from "../../../types";
import { Typography } from "../../foundation/Typography";
import { Button } from "../Button";
import { StyledModalHeaderDiv, StyledTruncateTypoDiv } from "./styles";

export const ModalHeader = ({
  title,
  titleVariant = "h6",
  hideCloseButton = false,
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
      <StyledModalHeaderDiv {...props} theme={theme} className="ModalHeader">
        {header !== undefined ? (
          header
        ) : (
          <Fragment>
            <StyledTruncateTypoDiv>
              <Typography
                variant={titleVariant ?? "h6"}
                color={theme.colors.text.main}
              >
                {title}
              </Typography>
            </StyledTruncateTypoDiv>
            {hideCloseButton !== true && (
              <Button
                icon
                onClick={onClose}
                borderRadius="circle"
                size="s"
                className="ModalCloseButton"
              >
                {icon ? (
                  icon
                ) : (
                  <CloseFilledIcon
                    fontSize={iconSize}
                    color={theme.colors.gray[1000]}
                  />
                )}
              </Button>
            )}
          </Fragment>
        )}
      </StyledModalHeaderDiv>
    </Fragment>
  );
};
