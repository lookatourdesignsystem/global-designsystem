import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { Fragment, useEffect } from "react";
import {
  LoadingCircleBack,
  LoadingCircleFront,
  LoadingDiv,
  LoadingLabelTypography,
  LoadingSpan,
  LoadingSVG,
  LOADING_CIRCLE_SIZE,
  StyledLoadingWrapperDiv,
} from "./styles";
import { useTheme } from "src/hooks/useTheme";
import { LoadingColor, LoadingVariant } from "src/types";
import { Backdrop } from "../Backdrop";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { createPortal } from "react-dom";

export interface LoadingProps {
  withOverlay?: boolean;
  color?: LoadingColor;
  size?: number;
  thickness?: number;
  disableShrink?: boolean;
  value?: number;
  range?: { min: number; max: number };
  variant?: LoadingVariant;
  label?: string;
  open?: boolean;
  disableBackdropClose?: boolean;
  backdropColor?: string;
  onClickBackdrop?: () => void;
  className?: string;
  testid?: string;
}

export const Loading = ({
  withOverlay,
  open,
  color = "default",
  size = 58,
  disableShrink = false,
  thickness = 6,
  value = 0,
  range = { min: 0, max: 100 },
  variant = "indeterminate",
  label = "",
  disableBackdropClose,
  backdropColor,
  onClickBackdrop,
  className,
  testid,
}: LoadingProps) => {
  const theme = useTheme();
  const circleColor =
    color === "primary"
      ? theme.colors.primary.main
      : color === "default"
      ? theme.colors.gray[1000]
      : theme.colors.system[color].main;

  const loading = (
    <LoadingDiv
      className={getJoinedClassName("Loading", {
        className,
      })}
      size={size}
      data-testid={testid}
    >
      <LoadingSpan variant={variant} colors={theme.colors} size={size}>
        <LoadingSVG
          viewBox={`${LOADING_CIRCLE_SIZE / 2} ${
            LOADING_CIRCLE_SIZE / 2
          } ${LOADING_CIRCLE_SIZE} ${LOADING_CIRCLE_SIZE}`}
        >
          <LoadingCircleBack
            cx={LOADING_CIRCLE_SIZE}
            cy={LOADING_CIRCLE_SIZE}
            r={(LOADING_CIRCLE_SIZE - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
            color={theme.colors.gray[300]}
          />
          <LoadingCircleFront
            cx={LOADING_CIRCLE_SIZE}
            cy={LOADING_CIRCLE_SIZE}
            r={(LOADING_CIRCLE_SIZE - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
            size={size}
            variant={variant}
            disableShrink={disableShrink}
            value={value}
            range={range}
            color={circleColor}
          />
        </LoadingSVG>
      </LoadingSpan>
      {label && (
        <LoadingLabelTypography variant="caption1" color={circleColor}>
          {label}
        </LoadingLabelTypography>
      )}
    </LoadingDiv>
  );

  useEffect(() => {
    if (value < range.min || value > range.max) {
      throw new Error(
        `Loading : The value(${value}) is not in range(min: ${range.min}, max: ${range.max})`
      );
    }
  }, [range.max, range.min, value]);

  if (!withOverlay) {
    return loading;
  }

  return (
    <Fragment>
      {createPortal(
        <Fragment>
          <AnimatePresence>
            {open && (
              <Backdrop
                color={backdropColor}
                onClick={onClickBackdrop}
                disableBackdropClose={disableBackdropClose}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {open && (
              <StyledLoadingWrapperDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {loading}
              </StyledLoadingWrapperDiv>
            )}
          </AnimatePresence>
        </Fragment>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};
