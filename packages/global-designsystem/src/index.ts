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
export { Accordion } from "./stories/components/Accordion";
export { Audio } from "./stories/components/Audio";
export { Avatar } from "./stories/components/Avatar";
export { Backdrop } from "./stories/components/Backdrop";
export { Badge } from "./stories/components/Badge";
export { BottomSheet } from "./stories/components/BottomSheet";
export { Box } from "./stories/components/Box";
export { Button } from "./stories/components/Button";
export { ButtonGroup } from "./stories/components/ButtonGroup";
export { Checkbox } from "./stories/components/Checkbox";
export { Chip } from "./stories/components/Chip";
export { ClickAwayListener } from "./stories/components/ClickAwayListener";
export { Container } from "./stories/components/Container";
export { Divider } from "./stories/components/Divider";
export { Drawer } from "./stories/components/Drawer";
export { FormControlLabel } from "./stories/components/FormControlLabel";
export { Icon } from "./stories/components/Icon";
export { Image } from "./stories/components/Image";
export { InlineLoading } from "./stories/components/InlineLoading";
export { Link } from "./stories/components/Link";
export { ListButton } from "./stories/components/ListButton";
export { Loading } from "./stories/components/Loading";
export { Menu } from "./stories/components/Menu";
export { Modal } from "./stories/components/Modal";
export { OverlayScrollbar } from "./stories/components/OverlayScrollbar";
export { Pagination } from "./stories/components/Pagination";
export { ProgressBar } from "./stories/components/ProgressBar";
export { Radio } from "./stories/components/Radio";
export { Select } from "./stories/components/Select";
export { SerialField } from "./stories/components/SerialField";
export { Skeleton } from "./stories/components/Skeleton";
export { Snackbar } from "./stories/components/Snackbar";
export { Spacer } from "./stories/components/Spacer";
export { Stack } from "./stories/components/Stack";
export { Switch } from "./stories/components/Switch";
export { Table } from "./stories/components/Table";
export { Tabs } from "./stories/components/Tabs";
export { TextField } from "./stories/components/TextField";
export { Textarea } from "./stories/components/Textarea";
export { Transition } from "./stories/components/Transition";
export { Video } from "./stories/components/Video";
export type { AccordionProps } from "./stories/components/Accordion";
export type { AudioProps } from "./stories/components/Audio";
export type { AvatarProps } from "./stories/components/Avatar";
export type { BackdropProps } from "./stories/components/Backdrop";
export type { BadgeProps } from "./stories/components/Badge";
export type { BottomSheetProps } from "./stories/components/BottomSheet";
export type { BoxProps } from "./stories/components/Box";
export type { ButtonProps } from "./stories/components/Button";
export type { ButtonGroupProps } from "./stories/components/ButtonGroup";
export type { CheckboxProps } from "./stories/components/Checkbox";
export type { ChipProps } from "./stories/components/Chip";
export type { ClickAwayListenerProps } from "./stories/components/ClickAwayListener";
export type { ContainerProps } from "./stories/components/Container";
export type { DividerProps } from "./stories/components/Divider";
export type { DrawerProps } from "./stories/components/Drawer";
export type { FormControlLabelProps } from "./stories/components/FormControlLabel";
export type { IconProps } from "./stories/components/Icon";
export type { ImageProps } from "./stories/components/Image";
export type { InlineLoadingProps } from "./stories/components/InlineLoading";
export type { LinkProps } from "./stories/components/Link";
export type { ListButtonProps } from "./stories/components/ListButton";
export type { LoadingProps } from "./stories/components/Loading";
export type { MenuProps } from "./stories/components/Menu";
export type { ModalProps } from "./stories/components/Modal";
export type { OverlayScrollbarProps } from "./stories/components/OverlayScrollbar";
export type { PaginationProps } from "./stories/components/Pagination";
export type { ProgressBarProps } from "./stories/components/ProgressBar";
export type { RadioProps } from "./stories/components/Radio";
export type { SelectProps } from "./stories/components/Select";
export type { SerialFieldProps } from "./stories/components/SerialField";
export type { SkeletonProps } from "./stories/components/Skeleton";
export type { SnackbarProps } from "./stories/components/Snackbar";
export type { SpacerProps } from "./stories/components/Spacer";
export type { StackProps } from "./stories/components/Stack";
export type { SwitchProps } from "./stories/components/Switch";
export type { TableProps } from "./stories/components/Table";
export type { TabsProps } from "./stories/components/Tabs";
export type { TextFieldProps } from "./stories/components/TextField";
export type { TextareaProps } from "./stories/components/Textarea";
export type { TransitionProps } from "./stories/components/Transition";
export type { VideoProps } from "./stories/components/Video";
