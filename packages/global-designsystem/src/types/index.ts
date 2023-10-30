export type ShapeType = "square" | "round";
export type SizeType = "xxs" | "xs" | "s" | "m" | "l" | "xl";
export type AlignType = "left" | "center" | "right";

export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl";

export type SpacingMultiple =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
export type BorderRadiusMultiple =
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "circle";
export type SpacingOptions = { [key in SpacingMultiple]: number };
export type OuterOptions = { [key in BreakpointKey]: number };
export type GuttersOptions = { [key in BreakpointKey]: number };
export type ContainerOptions = {
  xs: string;
  sm: string;
  md: number;
  lg: number;
  xl: number;
};

export type TypoVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "caption1"
  | "caption2"
  | "body1"
  | "body2"
  | "overline"
  | "button";
export type TypoFontFamily = "default" | "expressive";
export type TagVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "p"
  | "span";

export type ButtonVariant = "solid" | "solidSub" | "outlined" | "text";
export type ButtonStatus = "loading" | "selected" | "default";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonColors =
  | "default"
  | "primary"
  | "secondary"
  | "warning"
  | "error"
  | "success";

export type TextFieldAssetPosition = "left" | "right";
export type TextFieldInputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search";
export type TextFieldState = "error" | "success";

export type SerialFieldLength = false | 2 | 3 | 4 | 5 | 6;
export type SerialFieldState = "disabled" | "error" | "success";

export type BadgeColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export type BadgeVariant = "dot" | "1unit" | "2unit";

export type LabelPlacement = "bottom" | "end" | "start" | "top";
export type LabelAlignControl = "start" | "center" | "end";

export type ChipColor = "default" | "primary" | "secondary";
export type ChipSize = Extract<SizeType, "s" | "m">;
export type ChipType = "solid" | "outline" | "solidSub";

export type SnackbarAlertType =
  | "default"
  | "error"
  | "info"
  | "warning"
  | "success";
export type SnackbarVariant = "solid" | "outlined";

export type TransitionClassNamesKey =
  | "appear"
  | "appearActive"
  | "appearDone"
  | "enter"
  | "enterActive"
  | "enterDone"
  | "exit"
  | "exitActive"
  | "exitDone";

export type TransitionTypes =
  | ("fade" | "slide-bottom" | "slide-bottom-center")[]
  | undefined;

export type LoadingVariant = "determinate" | "indeterminate";
export type LoadingColor =
  | "default"
  | "primary"
  | "error"
  | "success"
  | "warning";

export type ProgressBarVariant = "determinate" | "indeterminate";
export type ProgressBarState = "normal" | "error" | "success";
export type InlineLoadingColor =
  | "default"
  | "primary"
  | "error"
  | "success"
  | "warning";

export type ScrollbarWidth = "auto" | "thin";
export type ScrollbarRadius = "square" | "circle";

export type SkeletonVariant = "text" | "shape";
export type SkeletonWordType = "title" | "sentence";

export type LinkVariant = Extract<
  TypoVariant,
  | "subtitle1"
  | "subtitle2"
  | "caption1"
  | "caption2"
  | "body1"
  | "body2"
  | "overline"
>;

export type AvatarVariant = Extract<
  TypoVariant,
  | "subtitle1"
  | "subtitle2"
  | "caption1"
  | "caption2"
  | "body1"
  | "body2"
  | "overline"
>;

export type StackDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type BorderRadiusOptions = {
  [key in BorderRadiusMultiple]: number | string;
};

export type ShapeOptions = {
  borderRadius: BorderRadiusOptions;
};
export type SizeOptions = {
  [key in SizeType]: number;
};
