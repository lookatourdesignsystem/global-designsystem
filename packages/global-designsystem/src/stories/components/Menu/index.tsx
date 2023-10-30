import { css, Global } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { ClickAwayListener } from "../ClickAwayListener";
import {
  StyledBackdropDiv,
  StyledMenuStack,
  StyledMenuWrapperDiv,
} from "./styles";

export interface MenuProps {
  anchorEl?: ReactNode;
  children?: ReactNode;
  show?: boolean;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
  className?: string;
  backdropColor?: string;
  disableBackDrop?: boolean;
  onClickAway?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  testid?: string;
}

export const Menu = ({
  anchorEl,
  children,
  show,
  className,
  vertical,
  horizontal,
  backdropColor,
  disableBackDrop,
  onClickAway,
  onMouseEnter,
  onMouseLeave,
  testid,
}: MenuProps) => {
  const theme = useTheme();
  const assetRef = useRef<HTMLDivElement>(null);
  const [assetHeight, setAssetHeight] = useState<number>(0);

  const handleClickOpenMenu = () => {
    if (onClickAway && show === true) {
      onClickAway();
    }
  };

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  useEffect(() => {
    if (assetRef.current !== null) {
      setAssetHeight(assetRef.current.offsetHeight);
    }
  }, []);

  return (
    <Fragment>
      {anchorEl === undefined ? (
        <StyledMenuStack
          className={getJoinedClassName("Menu", {
            className,
          })}
          spacing="100"
          borderColor={theme.colors.border}
          backgroundColor={theme.colors.background.elevated}
          vertical={vertical}
          horizontal={horizontal}
          assetHeight={assetHeight}
          data-testid={testid}
        >
          {children}
        </StyledMenuStack>
      ) : (
        <Fragment>
          <AnimatePresence>
            {show && disableBackDrop !== true && (
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
                    color={backdropColor || "transparent"}
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
            )}
          </AnimatePresence>
          <ClickAwayListener onClickAway={handleClickOpenMenu}>
            <StyledMenuWrapperDiv
              className={getJoinedClassName("MenuWrapper", {
                className: className,
              })}
              ref={assetRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-testid={testid}
            >
              {anchorEl}
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <StyledMenuStack
                      className="Menu"
                      spacing="100"
                      borderColor={theme.colors.border}
                      backgroundColor={theme.colors.background.elevated}
                      vertical={vertical}
                      horizontal={horizontal}
                      assetHeight={assetHeight}
                    >
                      {children}
                    </StyledMenuStack>
                  </motion.div>
                )}
              </AnimatePresence>
            </StyledMenuWrapperDiv>
          </ClickAwayListener>
        </Fragment>
      )}
    </Fragment>
  );
};
