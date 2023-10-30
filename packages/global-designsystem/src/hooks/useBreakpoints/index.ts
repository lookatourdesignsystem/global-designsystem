import { useEffect, useState } from "react";
import {
  BreakpointOptions,
  createBreakpoints,
} from "../../modules/breakpoints";
import { debounce } from "@lookatourdesignsystem/utils-library";
import { useTheme } from "../useTheme";
import { useIsMount } from "../components";

export const useBreakpoints = (): BreakpointOptions => {
  const theme = useTheme();
  const [current, setCurrent] = useState("");
  const isMount = useIsMount();

  useEffect(() => {
    const handleResize = () => {
      debounce(() => {
        if (isMount.current) {
          const temp = createBreakpoints(theme.breakpoints).currentKey();

          if (current === temp) {
            return;
          }

          // current가 갱신될때 theme.breakpoints가 갱신되면서 calc의 값도 업데이트되는 것 같은데 명확하지는 않아서 재확인 및 수정이 필요하다.
          setCurrent(temp);
        }
      }, 250)();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMount]);

  return { ...createBreakpoints(theme.breakpoints) };
};
