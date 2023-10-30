import { css, Global } from "@emotion/react";
import { ReactNode, Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import { TypoVariant } from "../../../types";
import { StyledBackdropDiv } from "../Backdrop/styles";
import { ModalContent } from "./ModalContent";
import { AnimatePresence, Variant } from "framer-motion/dist/framer-motion";
import {
  ContainerModalDispatchContext,
  ContainerModalListContext,
} from "../../../hooks/components/useContainerModal/ContainerModalContext";
import { useTheme } from "src/hooks/useTheme";

export interface ModalProps {
  id?: string;
  title?: string;
  titleVariant?: TypoVariant;
  header?: ReactNode;
  fixTop?: ReactNode;
  children?: ReactNode;
  fixBottom?: ReactNode;
  open?: boolean;
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
  animationVariables?: any;
  onClose: () => void;
  borderWidth?: number;
  testid?: string;
}

export const Modal = ({
  id,
  children,
  title,
  titleVariant = "h6",
  hideCloseButton = false,
  disableBackdropClose = false,
  hideBackdrop,
  open = false,
  header,
  fixTop,
  fixBottom,
  className,
  icon,
  iconSize = 24,
  fullScreen = false,
  backdropColor,
  animation,
  animationVariables,
  onClose,
  borderWidth = 0,
  testid,
}: ModalProps) => {
  const theme = useTheme();
  const { removeModal } = useContext(ContainerModalDispatchContext);
  const openedModals = useContext(ContainerModalListContext);
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
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
          <AnimatePresence
            onExitComplete={() => {
              id && removeModal(id);
            }}
          >
            {open && (
              <Fragment>
                {hideBackdrop !== true && (
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
                <ModalContent
                  id={id}
                  title={title}
                  titleVariant={titleVariant}
                  hideCloseButton={hideCloseButton}
                  onClick={handleCloseIconButton}
                  fixTop={fixTop}
                  fixBottom={fixBottom}
                  className={className}
                  icon={icon}
                  iconSize={iconSize}
                  fullScreen={fullScreen}
                  header={header}
                  animation={animation}
                  animationVariables={animationVariables}
                  borderWidth={borderWidth}
                  data-testid={testid}
                >
                  {children}
                </ModalContent>
              </Fragment>
            )}
          </AnimatePresence>
          {openedModals.length === 0 && open && (
            <Global
              styles={css`
                body {
                  overflow: hidden;
                }
              `}
            />
          )}
        </Fragment>,
        modalRoot
      )}
    </Fragment>
  );
};
