import { typoVariants } from "src/modules/typos";

export const commonArgTypes = {
  className: {
    description: "추가적으로 class를 커스텀할 수 있습니다.",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  testid: {
    description: "테스트 코드 작성을 위한 선택자 id입니다.",
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
};

export const borderRadiusTypes = [
  "0",
  "100",
  "200",
  "300",
  "400",
  "500",
  "circle",
];

export const sizeTypes = ["xl", "l", "m", "s", "xs", "xxs"];
export const colorTypes = [
  "default",
  "error",
  "success",
  "primary",
  "secondary",
  "warning",
];
export const loadingTypes = [
  "default",
  "error",
  "success",
  "primary",
  "warning",
];
export const typographyTypes = Object.keys(typoVariants);
export const spacingTypes = [
  0,
  "50",
  "100",
  "200",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
];
export const inputModeTypes = [
  "none",
  "text",
  "tel",
  "url",
  "email",
  "numeric",
  "decimal",
  "search",
];
export const textAlignTypes = [
  "center",
  "end",
  "justify",
  "left",
  "match-parent",
  "right",
  "start",
];
export const systemColorTypes = [
  "default",
  "primary",
  "secondary",
  "error",
  "warning",
  "success",
  "info",
];

export const typoVariantTypes = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "caption1",
  "caption2",
  "body1",
  "body2",
  "overline",
  "button",
];
