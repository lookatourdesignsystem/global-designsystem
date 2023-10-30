import { useContext } from "react";
import { DarkModeDispatchContext } from "./DarkModeContext";

export const useDarkMode = () => {
  const { isDarkMode, setToggleDarkMode } = useContext(DarkModeDispatchContext);

  return {
    isDarkMode,
    setToggleDarkMode,
  };
};
