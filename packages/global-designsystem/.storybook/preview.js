import "../src/index.css";
import "../src/assets/font.css";
import { ThemeProvider } from "../src";
import { useEffect, Fragment, useCallback } from "react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import { DocsContainer } from "./DocsContainer";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      brandTitle: `Global Design System`,
      appContentBg: "#000000",
    },
    light: {
      ...themes.light,
      brandTitle: `Global Design System`,
    },
  },
  layout: "padded",
  docs: {
    container: DocsContainer,
  },
  options: {
    storySort: {
      order: [
        "Action",
        "Overlay",
        "Layout",
        "Data Display",
        "Inputs",
        "Loading",
        "Foundation",
        "Media",
        "Util",
        "Hooks",
      ],
    },
  },
};

const lightColorOptions = {
  border: "#dddddd",
  blank: "#EBEBEB",
  gray: {
    0: "#ffffff",
    50: "#f9f9f9",
    100: "#f3f3f3",
    200: "#eeeeee",
    300: "#dddddd",
    400: "#999999",
    500: "#666666",
    600: "#444444",
    700: "#333333",
    800: "#222222",
    900: "#111111",
    1000: "#000000",
  },
  system: {
    success: { main: "#4caf50", text: "#ffffff" },
    error: { main: "#d32f2f", text: "#ffffff" },
    warning: { main: "#F9A825", text: "#ffffff" },
    info: { main: "#0073F0", text: "#ffffff" },
  },
  primary: {
    main: "#0073F0",
    darken: "#003B7B",
    lighten: "#E0F0FF",
    text: "#ffffff",
  },
  secondary: {
    main: "#6450F2",
    darken: "#372C7A",
    lighten: "#DFDAFF",
    text: "#ffffff",
  },
  text: {
    main: "#000000",
    sub: "#333333",
    low: "#666666",
    verylow: "#999999",
    disabled: "#dddddd",
    link: "#296BEC",
  },
  interactive: {
    hover: "rgba(255, 255, 255, 0.3)",
    active: "rgba(0, 0, 0, 0.3)",
    pressed1: "rgba(0, 0, 0, 0.05)",
    pressed2: "rgba(0, 0, 0, 0.1)",
    disabled: "0.3",
  },
  background: {
    global: "#ffffff",
    layer1: "#f3f3f3",
    layer2: "#ffffff",
    elevated: "#ffffff",
    primary: "#0073F0",
    dim: "rgba(0,0,0,0.5)",
  },
  component: {
    list: { selected: "#E0F0FF" },
    skeleton: {
      background: "rgba(0, 0, 0, 0.08)",
      foreground: "rgba(0, 0, 0, 0.12)",
    },
  },
  scrollBar: {
    default: "rgba(0,0,0,0.4)",
    hover: "rgba(0,0,0,0.5)",
    active: "rgba(0,0,0,0.6)",
  },
};

const darkColorOptions = {
  border: "#444444",
  blank: "#313030",
  gray: {
    0: "#000000",
    50: "#111111",
    100: "#222222",
    200: "#333333",
    300: "#444444",
    400: "#666666",
    500: "#999999",
    600: "#dddddd",
    700: "#eeeeee",
    800: "#f3f3f3",
    900: "#f9f9f9",
    1000: "#ffffff",
  },
  system: {
    success: { main: "#53A356", text: "#ffffff" },
    error: { main: "#C73D3D", text: "#ffffff" },
    warning: { main: "#EBA535", text: "#ffffff" },
    info: { main: "#1A7DE9", text: "#ffffff" },
  },
  primary: {
    main: "#207DE1",
    darken: "#024389",
    lighten: "#E7F3FF",
    text: "#FFFFFF",
  },
  secondary: {
    main: "#6757DA",
    darken: "#413782",
    lighten: "#E4E0FF",
    text: "#ffffff",
  },
  text: {
    main: "#ffffff",
    sub: "#eeeeee",
    low: "#999999",
    verylow: "#666666",
    disabled: "#444444",
    link: "#447DEB",
  },
  interactive: {
    hover: "rgba(255, 255, 255, 0.3)",
    active: "rgba(0, 0, 0, 0.3)",
    pressed1: "rgba(255, 255, 255, 0.05)",
    pressed2: "rgba(255, 255, 255, 0.1)",
    disabled: "0.3",
  },
  background: {
    global: "#000000",
    layer1: "#111111",
    layer2: "#222222",
    elevated: "#111111",
    primary: "#207DE1",
    dim: "rgba(0,0,0,0.5)",
  },
  component: {
    list: { selected: "#024389" },
    skeleton: {
      background: "rgba(255, 255, 255, 0.26)",
      foreground: "rgba(255, 255, 255, 0.2)",
    },
  },
  scrollBar: {
    default: "rgba(255,255,255,0.4)",
    hover: "rgba(255,255,255,0.5)",
    active: "rgba(255,255,255,0.6)",
  },
};

export const decorators = [
  (Story) => {
    let modalRoot = document.getElementById("modal-root");
    const root = document.getElementById("root");

    const addRoots = useCallback(() => {
      const appendChild = (id) => {
        const newRoot = document.createElement("div");
        newRoot.setAttribute("id", id);
        document.body.appendChild(newRoot);
        modalRoot = document.getElementById("modal-root");
      };
      ["modal-root", "sidebar-root", "overlay-root", "snackbar-root"].forEach(
        (id) => {
          appendChild(id);
        }
      );
      return (
        <ThemeProvider
          theme={{
            colors: useDarkMode() ? darkColorOptions : lightColorOptions,
          }}
        >
          <Story />
        </ThemeProvider>
      );
    }, []);
    useEffect(() => {
      if (modalRoot === null) {
        addRoots();
      }
    }, [root, modalRoot]);

    return (
      <Fragment>
        {modalRoot === null ? (
          addRoots()
        ) : (
          <ThemeProvider
            theme={{
              colors: useDarkMode() ? darkColorOptions : lightColorOptions,
            }}
          >
            <Story />
          </ThemeProvider>
        )}
      </Fragment>
    );
  },
];
