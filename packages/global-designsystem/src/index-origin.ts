import "./index.css";
import "./assets/font.css";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { breakpointKeys, BreakpointOptions } from "./modules/breakpoints";
import { typoVariants } from "./modules/typos";

import { Grid, GridProps } from "./stories/foundation/Grid";
import { Typography, TypographyProps } from "./stories/foundation/Typography";
import { ThemeOptions } from "./modules/defaultTheme";
import { createBreakpoints } from "./modules/breakpoints";
import { createTypos } from "./modules/typos";
import { createSpacing } from "./modules/spacing";

import { useSnackbar } from "./hooks/components/useSnackbar";
import { useLoading } from "./hooks/components/useLoading";
import { useContainerModal } from "./hooks/components/useContainerModal";
import { useDarkMode } from "./hooks/components/useDarkMode";

import {
  SnackbarContext,
  SnackBarOption,
} from "./hooks/components/useSnackbar/SnackbarContext";
import {
  LoadingDispatchContext,
  LoadingStateContext,
} from "./hooks/components/useLoading/LoadingContext";
import { ContainerModalDispatchContext } from "./hooks/components/useContainerModal/ContainerModalContext";
import { ContainerModalListContext } from "./hooks/components/useContainerModal/ContainerModalContext";
import { DarkModeDispatchContext } from "./hooks/components/useDarkMode/DarkModeContext";

import { SnackbarProvider } from "./providers/Snackbar";
import { LoadingProvider } from "./providers/Loading";
import { ContainerModalProvider } from "./providers/ContainerModal";
import { ThemeProvider } from "./providers/theme";
import { useTheme } from "./hooks/useTheme";
import { useBreakpoints } from "./hooks/useBreakpoints";
import {
  useSerialField,
  useTextField,
  useNumberField,
  useTextarea,
  useModal,
  useIntersection,
  useWindowSize,
  useScrollIntoView,
  useIsMount,
} from "./hooks/components";
import { ColorOptions } from "./modules/colors";
import {
  ShapeType,
  SizeType,
  BreakpointKey,
  SpacingMultiple,
  SpacingOptions,
  TypoVariant,
  TypoFontFamily,
  TagVariant,
  ButtonVariant,
  ButtonStatus,
  ButtonColors,
  ButtonType,
  TextFieldAssetPosition,
  TextFieldInputType,
  TextFieldState,
  SerialFieldLength,
  SerialFieldState,
  BadgeColor,
  BadgeVariant,
  LabelPlacement,
  LabelAlignControl,
  ChipColor,
  ChipSize,
  ChipType,
  SnackbarAlertType,
  SnackbarVariant,
  TransitionClassNamesKey,
  TransitionTypes,
  OuterOptions,
  GuttersOptions,
  ContainerOptions,
  AlignType,
  LoadingVariant,
  LoadingColor,
  ProgressBarVariant,
  ProgressBarState,
  InlineLoadingColor,
  ScrollbarWidth,
  ScrollbarRadius,
  LinkVariant,
  AvatarVariant,
  StackDirection,
  BorderRadiusMultiple,
} from "./types";

export type {
  ThemeOptions,
  BreakpointOptions,
  ColorOptions,
  SnackBarOption,
  ShapeType,
  SizeType,
  BreakpointKey,
  SpacingMultiple,
  SpacingOptions,
  TypoVariant,
  TypoFontFamily,
  TagVariant,
  ButtonVariant,
  ButtonStatus,
  ButtonColors,
  ButtonType,
  TextFieldAssetPosition,
  TextFieldInputType,
  TextFieldState,
  SerialFieldLength,
  SerialFieldState,
  BadgeColor,
  BadgeVariant,
  LabelPlacement,
  LabelAlignControl,
  ChipColor,
  ChipSize,
  ChipType,
  SnackbarAlertType,
  SnackbarVariant,
  TransitionClassNamesKey,
  TransitionTypes,
  TypographyProps,
  GridProps,
  OuterOptions,
  GuttersOptions,
  ContainerOptions,
  AlignType,
  LoadingVariant,
  LoadingColor,
  ProgressBarVariant,
  ProgressBarState,
  InlineLoadingColor,
  ScrollbarWidth,
  ScrollbarRadius,
  LinkVariant,
  AvatarVariant,
  StackDirection,
  BorderRadiusMultiple,
};

export {
  ThemeProvider,
  useTheme,
  useBreakpoints,
  breakpointKeys,
  typoVariants,
  useSerialField,
  useTextField,
  useNumberField,
  useTextarea,
  useModal,
  useIntersection,
  useWindowSize,
  useScrollIntoView,
  useIsMount,
  Typography,
  Grid,
  useSnackbar,
  SnackbarContext,
  SnackbarProvider,
  createBreakpoints,
  createTypos,
  createSpacing,
  useLoading,
  useDarkMode,
  LoadingDispatchContext,
  LoadingStateContext,
  LoadingProvider,
  ContainerModalProvider,
  useContainerModal,
  ContainerModalDispatchContext,
  ContainerModalListContext,
  DarkModeDispatchContext,
};
export { componentDesc } from "./stories/docs";
