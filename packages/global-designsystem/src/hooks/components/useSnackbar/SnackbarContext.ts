import { createContext } from "react";
import { BreakpointKey, SnackbarAlertType } from "../../../types";

export interface SnackBarOption {
  onClickAction?: () => void;
  actionText?: string;
  duration?: number;
  timeout?: number;
  alert?: SnackbarAlertType;
  transitionType?: ("fade" | "slide-bottom-center")[];
  showActionButton?: boolean;
  showSystemIcon?: boolean;
  showCloseButton?: boolean;
  position?: {
    [key in BreakpointKey]?: {
      top?: number | string;
      left?: number;
      right?: number;
      bottom?: number | string;
    };
  };
}
export const SnackbarContext = createContext<{
  addMessage: (message: string, options?: SnackBarOption) => void;
  clearMessages: () => void;
  updateBasePosition: (basePosition: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  }) => void;
}>({
  addMessage: (message: string, options?: SnackBarOption) => {},
  clearMessages: () => {},
  updateBasePosition: (basePosition: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  }) => {},
});
