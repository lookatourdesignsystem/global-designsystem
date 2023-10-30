import { LoadingProps } from "src/stories/components/Loading";
import { LoadingColor } from "../../../types/index";
import { createContext } from "react";

export const LoadingDispatchContext = createContext<{
  open: (options?: LoadingProps) => void;
  close: () => void;
  updateLabel: (label?: string) => void;
  updateColor: (state?: LoadingColor) => void;
}>({
  open: (options?: LoadingProps) => {},
  close: () => {},
  updateLabel: (label?: string) => {},
  updateColor: (state?: LoadingColor) => {},
});

export const LoadingStateContext = createContext<boolean>(false);
