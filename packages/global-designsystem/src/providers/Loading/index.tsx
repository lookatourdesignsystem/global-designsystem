import { Fragment, ReactNode, useMemo, useState } from "react";
import {
  LoadingDispatchContext,
  LoadingStateContext,
} from "../../hooks/components/useLoading/LoadingContext";
import { LoadingColor } from "../../types";
import { Loading, LoadingProps } from "src/stories/components/Loading";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingOption, setLoadingOption] = useState<LoadingProps>({
    size: 58,
    thickness: 8,
    disableShrink: false,
    label: "",
    color: "default",
  });

  const open = (options?: LoadingProps) => {
    setLoadingOption((prevState) => {
      return {
        ...prevState,
        ...options,
      };
    });
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const updateLabel = (label?: string) => {
    setLoadingOption((prevState) => {
      return {
        ...prevState,
        label: label,
      };
    });
  };

  const updateColor = (color?: LoadingColor) => {
    setLoadingOption((prevState) => {
      return {
        ...prevState,
        color: color,
      };
    });
  };

  const dispatch = useMemo(
    () => ({ open, close, updateLabel, updateColor }),
    []
  );

  return (
    <LoadingStateContext.Provider value={isOpen}>
      <LoadingDispatchContext.Provider value={dispatch}>
        <Fragment>
          {children}
          <Loading
            {...loadingOption}
            open={isOpen}
            onClickBackdrop={close}
            withOverlay
          />
        </Fragment>
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
};
