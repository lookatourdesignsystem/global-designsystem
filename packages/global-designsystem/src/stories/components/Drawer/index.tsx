import { css, Global } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import {
  StyledBackdropDiv,
  StyledDrawerContentDiv,
  StyledDrawerDiv,
  StyledDrawerFooterDiv,
  StyledDrawerHeaderDiv,
} from "./styles";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  direction?: "left" | "right";
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  backdropColor?: string;
  className?: string;
  testid?: string;
}

export const Drawer = ({
  open,
  onClose,
  fullScreen,
  direction = "left",
  header,
  children,
  footer,
  backdropColor,
  className,
  testid,
}: DrawerProps) => {
  const theme = useTheme();

  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <AnimatePresence>
            {open && (
              <Fragment>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Fragment>
                      <StyledBackdropDiv
                        className="Backdrop"
                        color={backdropColor || theme.colors.background.dim}
                        onClick={onClose}
                      />
                      <Global
                        styles={css`
                          body {
                            overflow: hidden;
                          }
                        `}
                      />
                    </Fragment>
                  </motion.div>
                  <StyledDrawerDiv
                    className={getJoinedClassName("Drawer", {
                      className,
                    })}
                    theme={theme}
                    fullScreen={fullScreen}
                    direction={direction}
                    data-testid={testid}
                    initial={{
                      translateX: direction === "left" ? "-100%" : "100%",
                    }}
                    animate={{ translateX: "0px" }}
                    exit={{
                      translateX: direction === "left" ? "-100%" : "100%",
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {header !== undefined && (
                      <StyledDrawerHeaderDiv
                        className="DrawerHeader"
                        backgroundColor={theme.colors.background.elevated}
                      >
                        {header}
                      </StyledDrawerHeaderDiv>
                    )}
                    <StyledDrawerContentDiv
                      className="DrawerContent"
                      backgroundColor={theme.colors.background.elevated}
                    >
                      {children}
                    </StyledDrawerContentDiv>
                    {footer !== undefined && (
                      <StyledDrawerFooterDiv
                        className="DrawerFooter"
                        backgroundColor={theme.colors.background.elevated}
                      >
                        {footer}
                      </StyledDrawerFooterDiv>
                    )}
                  </StyledDrawerDiv>
                </motion.div>
              </Fragment>
            )}
          </AnimatePresence>
        </Fragment>,
        document.getElementById("sidebar-root") as HTMLElement
      )}
    </Fragment>
  );
};
