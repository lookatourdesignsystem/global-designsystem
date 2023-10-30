import { useContext } from "react";
import { ThemeOptions } from "../../modules/defaultTheme";
import ThemeContext from "./ThemeContext";

export const useTheme = () => {
  const theme = useContext<ThemeOptions>(ThemeContext);
  return theme;
};
