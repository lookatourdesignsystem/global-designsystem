import { createContext } from "react";
import { defaultTheme } from "../../modules/defaultTheme";

const ThemeContext = createContext(defaultTheme);

export default ThemeContext;
