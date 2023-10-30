import { colors } from "../assets/foundation.json";
export interface ColorOptions {
  border: string;
  blank: string;
  primary: {
    main: string;
    lighten: string;
    darken: string;
    text: string;
  };
  secondary: {
    main: string;
    lighten: string;
    darken: string;
    text: string;
  };
  gray: {
    0: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  };
  system: {
    success: {
      main: string;
      text: string;
    };
    error: {
      main: string;
      text: string;
    };
    info: {
      main: string;
      text: string;
    };
    warning: {
      main: string;
      text: string;
    };
  };
  text: {
    main: string;
    sub: string;
    low: string;
    verylow: string;
    disabled: string;
    link: string;
  };
  background: {
    global: string;
    layer1: string;
    layer2: string;
    elevated: string;
    primary: string;
    dim: string;
  };
  interactive: {
    active: string;
    hover: string;
    disabled: string;
    pressed1: string;
    pressed2: string;
  };
  component: {
    list: {
      selected: string;
    };
    skeleton: {
      background: string;
      foreground: string;
    };
  };
  scrollBar: {
    default: string;
    hover: string;
    active: string;
  };
}

export const lightColorOptions: ColorOptions = colors.light;

export const darkColorOptions: ColorOptions = colors.dark;
