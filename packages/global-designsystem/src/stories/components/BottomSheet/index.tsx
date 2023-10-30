import { ReactNode, Fragment } from "react";
import { TypoVariant } from "../../../types";
import { BottomSheetContent } from "./BottomSheetContent";
import { AnimatePresence, Variant } from "framer-motion/dist/framer-motion";
import { StyledBackdropDiv } from "./styles";
import { createPortal } from "react-dom";
import { useTheme } from "src/hooks/useTheme";

export interface BottomSheetProps {
  title?: string;
  titleVariant?: TypoVariant;
  children: ReactNode;
  fixTop?: ReactNode;
  fixBottom?: ReactNode;
  open: boolean;
  hideCloseButton?: boolean;
  disableBackdropClose?: boolean;
  hideBackdrop?: boolean;
  className?: string;
  icon?: ReactNode;
  iconSize?: number;
  fullScreen?: boolean;
  backdropColor?: string;
  animation?: {
    hidden?: Variant;
    visible?: Variant;
    exit?: Variant;
  };
  animationVariables?: object;
  header?: ReactNode;
  borderWidth?: number;
  onClose: () => void;
  testid?: string;
}

export const BottomSheet = ({
  children,
  title,
  titleVariant = "h6",
  hideCloseButton = false,
  disableBackdropClose = false,
  hideBackdrop,
  open,
  header,
  borderWidth = 0,
  fixTop,
  fixBottom,
  className,
  icon,
  iconSize = 24,
  fullScreen,
  backdropColor,
  animation,
  animationVariables,
  onClose,
  testid,
}: BottomSheetProps) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const theme = useTheme();

  const handleCloseBackDrop = () => {
    if (disableBackdropClose === true) {
      return;
    }
    onClose();
  };

  const handleCloseIconButton = () => {
    if (hideCloseButton === true) {
      return;
    }
    onClose();
  };

  return (
    <Fragment>
      {createPortal(
        <Fragment>
          {hideBackdrop !== true && (
            <AnimatePresence>
              {open && (
                <StyledBackdropDiv
                  className="Backdrop"
                  onClick={handleCloseBackDrop}
                  color={backdropColor || theme.colors.background.dim}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              )}
            </AnimatePresence>
          )}
          <AnimatePresence>
            {open && (
              <BottomSheetContent
                title={title}
                titleVariant={titleVariant}
                hideCloseButton={hideCloseButton}
                isOpened={open}
                onClick={handleCloseIconButton}
                fixTop={fixTop}
                fixBottom={fixBottom}
                className={className}
                icon={icon}
                iconSize={iconSize}
                fullScreen={fullScreen}
                header={header}
                borderWidth={borderWidth}
                animation={animation}
                animationVariables={animationVariables}
                data-testid={testid}
              >
                {children}
              </BottomSheetContent>
            )}
          </AnimatePresence>
        </Fragment>,
        modalRoot
      )}
    </Fragment>
  );
};
