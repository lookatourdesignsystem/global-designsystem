import { ColorOptions } from "./colors";
import { lightColorOptions } from "./colors";
import { BreakpointKeyOptions } from "./breakpoints";
import { createSpacing } from "./spacing";
import { createTypos, TypoOptions } from "./typos";
import {
  ContainerOptions,
  GuttersOptions,
  OuterOptions,
  ShapeOptions,
  SizeOptions,
  SpacingOptions,
} from "../types";
import {
  typography,
  shape,
  size,
  breakpoints,
  gutters,
  outer,
  container,
} from "../assets/foundation.json";
export interface ThemeOptions {
  colors: ColorOptions;
  typography: TypoOptions;
  spacing: SpacingOptions;
  size: SizeOptions;
  breakpoints: BreakpointKeyOptions;
  shape: ShapeOptions;
  gutters: GuttersOptions;
  outer: OuterOptions;
  container: ContainerOptions;
}

export const defaultTheme: ThemeOptions = {
  colors: lightColorOptions,
  typography: createTypos(typography),
  spacing: createSpacing(4),
  shape,
  size,
  breakpoints,
  gutters,
  outer,
  container,
};
