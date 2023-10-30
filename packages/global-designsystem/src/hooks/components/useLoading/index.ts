import { LoadingColor } from "../../../types/index";
import { useContext } from "react";
import { LoadingDispatchContext } from "./LoadingContext";
import { LoadingProps } from "src/stories/components/Loading";

export const useLoading = () => {
  const { open, close, updateLabel, updateColor } = useContext(
    LoadingDispatchContext
  );
  const openLoading = (options?: LoadingProps) => {
    open(options);
  };
  const closeLoading = () => {
    close();
  };
  const updateLoadingLabel = (label: string) => {
    updateLabel(label);
  };
  const updateLoadingColor = (state: LoadingColor) => {
    updateColor(state);
  };
  return {
    openLoading,
    closeLoading,
    updateLoadingLabel,
    updateLoadingColor,
  };
};
