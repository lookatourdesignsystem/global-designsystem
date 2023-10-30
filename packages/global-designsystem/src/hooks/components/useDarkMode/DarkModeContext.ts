import { createContext } from "react";

export const DarkModeDispatchContext = createContext<{
  isDarkMode: boolean;
  setToggleDarkMode: () => void;
}>({
  isDarkMode: false,
  setToggleDarkMode: () => {},
});
