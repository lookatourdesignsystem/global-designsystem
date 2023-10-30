import { Fragment, useContext, useMemo, useState } from "react";
import { css, Global } from "@emotion/react";
import { ThemeOptions } from "../../modules/defaultTheme";
import { BreakpointOptions, breakpointKeys } from "../../modules/breakpoints";
import { useTheme } from "../../hooks/useTheme";
import ThemeContext from "../../hooks/useTheme/ThemeContext";
import { Transition, transitionEffect } from "../../modules/transitions";
import { BreakpointKey, TypoFontFamily, TypoVariant } from "../../types";
import { mergeDeep } from "@lookatourdesignsystem/utils-library";
import { DarkModeDispatchContext } from "../../hooks/components/useDarkMode/DarkModeContext";
import { darkColorOptions, lightColorOptions } from "../../modules/colors";
import { useBreakpoints } from "../../hooks/useBreakpoints";

// https://github.com/mui/material-ui/blob/512896973499adbbda057e7f3685d1b23cc02de9/packages/mui-private-theming/src/ThemeProvider/ThemeProvider.js
// https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

// 하드코딩된것 나중에 theme의 값에 따라 바뀔 수 있도록 해야함

/* 
 * 2022.07.27 : Grid에 outer 제거하면서 미사용중
const getMaxWidth = (key: string, value: number, gutter: number) => {
  if (key === "xl" || key === "lg" || key === "md") {
    return value + "px;";
  }

  return "calc(100% + " + gutter + "px);";
};
*/
const getGridStyles = (theme: ThemeOptions, breakpoints: BreakpointOptions) => {
  let styles = ``;
  const gutters: any = theme.gutters;

  for (let key of breakpointKeys) {
    const gutter = gutters[key];

    styles += `
    ${breakpoints?.up(key as BreakpointKey)} {
      .Grid__container {
        display: grid;
        gap: ${gutter}px;

        & > .Grid__item.${key}-1   { grid-column-end: span 1; }
        & > .Grid__item.${key}-2   { grid-column-end: span 2; }
        & > .Grid__item.${key}-3   { grid-column-end: span 3; }
        & > .Grid__item.${key}-4   { grid-column-end: span 4; }
        & > .Grid__item.${key}-5   { grid-column-end: span 5; }
        & > .Grid__item.${key}-6   { grid-column-end: span 6; }
        & > .Grid__item.${key}-7   { grid-column-end: span 7; }
        & > .Grid__item.${key}-8   { grid-column-end: span 8; }
        & > .Grid__item.${key}-9   { grid-column-end: span 9; }
        & > .Grid__item.${key}-10  { grid-column-end: span 10; }
        & > .Grid__item.${key}-11  { grid-column-end: span 11; }
        & > .Grid__item.${key}-12  { grid-column-end: span 12; }
      }
    }
    `;
  }

  return styles;
};

const getTypographyStyles = (theme: ThemeOptions) => {
  let styles = ``;

  for (const font in theme.typography.fonts) {
    for (const key in theme.typography.fonts[font as TypoFontFamily].variant) {
      styles += `
	      .typography-${font}-${key} {
            font-family: ${
              theme.typography.fonts[font as TypoFontFamily].fontFamily
            };
            font-size: ${
              theme.typography.fonts[font as TypoFontFamily].variant[
                key as TypoVariant
              ].fontSize
            };
            font-weight: ${
              theme.typography.fonts[font as TypoFontFamily].variant[
                key as TypoVariant
              ].fontWeight
            };
            line-height: ${
              theme.typography.fonts[font as TypoFontFamily].variant[
                key as TypoVariant
              ].lineHeight
            };
            letter-spacing: 0px;
	      }
	  `;
    }
  }
  return styles;
};

const getTransitionStyles = (params: { [key: string]: Transition }) => {
  const styles = Object.keys(params).map(
    (key) =>
      css`
        .${key}-enter {
          ${params[key]["enter"]}
        }
        .${key}-enter-active {
          ${params[key]["enter-active"]}
        }
        .${key}-enter-done {
          ${params[key]["enter-done"]}
        }
        .${key}-enter-active {
          ${params[key]["exit"]}
        }
        .${key}-exit-active {
          ${params[key]["exit-active"]}
        }
      `
  );

  return styles;
};

const getContainerStyles = (
  theme: ThemeOptions,
  breakpoints: BreakpointOptions
) => {
  let styles = ``;
  const outers: any = theme.outer;
  const containers: any = theme.container;

  for (let key of breakpointKeys) {
    const outer = outers[key];
    const container = containers[key];

    styles += `
    ${breakpoints?.up(key as BreakpointKey)} {
      .Container {
        width: 100%;
        max-width: ${
          typeof container === "number" ? container + "px" : container
        };
        padding: 0 ${outer}px;
        margin: 0 auto;
      }
    }
    `;
  }

  return styles;
};

const getOverlayScrollbarStyles = (theme: ThemeOptions) => {
  let styles = ``;

  styles += `
	      .os-theme-dark {
          --os-handle-bg: ${theme.colors.scrollBar.default};
          --os-handle-bg-hover: ${theme.colors.scrollBar.hover};
          --os-handle-bg-active: ${theme.colors.scrollBar.active};
	      }
	  `;

  return styles;
};

const global = (theme: ThemeOptions, breakpoints: BreakpointOptions) => css`
  html {
    font-size: ${theme.typography.fontSize};
    /* ${getTransitionStyles(transitionEffect)} */
  }
  ${getGridStyles(theme, breakpoints)}
  ${getTypographyStyles(theme)}
  ${getContainerStyles(theme, breakpoints)}
  ${getOverlayScrollbarStyles(theme)}
`;

export const ThemeProvider = ({
  children,
  theme: localTheme,
}: {
  children: any;
  theme: any;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const outerTheme = useTheme();
  const breakpoints = useBreakpoints();

  const theme = useMemo(() => {
    return outerTheme === null ? localTheme : mergeDeep(outerTheme, localTheme);
  }, [localTheme, outerTheme]);

  const setToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const dispatch = useMemo(
    () => ({ setToggleDarkMode, isDarkMode }),
    [isDarkMode]
  );

  return (
    <Fragment>
      <DarkModeDispatchContext.Provider value={dispatch}>
        <ThemeContext.Provider
          value={{
            ...theme,
            colors: isDarkMode ? darkColorOptions : lightColorOptions,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </DarkModeDispatchContext.Provider>
      <Global styles={global(theme, breakpoints)}></Global>
    </Fragment>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { useThemeContext };
