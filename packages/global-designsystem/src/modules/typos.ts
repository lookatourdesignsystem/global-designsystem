import { TypoVariant } from "../types";

export type TypoVariantStyles = {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
};

export type TypoFontsOptions = {
  fontFamily: string;
  variant: {
    [key in TypoVariant]: TypoVariantStyles;
  };
};

export type TypoOptions = {
  fontSize: string;
  fonts: {
    default: TypoFontsOptions;
    expressive: TypoFontsOptions;
  };
};

export const typoVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "div",
  subtitle2: "div",
  caption1: "span",
  caption2: "span",
  body1: "p",
  body2: "p",
  overline: "span",
  button: "span",
};

export const createTypos = (typos: any) => {
  const variants = Object.keys(typoVariants);

  let fontSize: any = {};
  if (typos.fontSize) {
    fontSize = typos.fontSize;
  }

  let defaultFont: any = {};
  if (typos.fonts.default) {
    defaultFont.fontFamily = typos.fonts.default.fontFamily;
    let variant: any = {};
    for (let key of variants) {
      if (typos.fonts.default.variant[key]) {
        variant[key] = typos.fonts.default.variant[key];
      }
    }
    defaultFont.variant = variant;
  }

  let expressiveFont: any = {};
  if (typos.fonts.expressive) {
    expressiveFont.fontFamily = typos.fonts.expressive.fontFamily;
    let variant: any = {};
    for (let key of variants) {
      if (typos.fonts.expressive.variant[key]) {
        variant[key] = typos.fonts.expressive.variant[key];
      }
    }
    expressiveFont.variant = variant;
  }

  return {
    fontSize,
    fonts: {
      default: defaultFont,
      expressive: expressiveFont,
    },
  };
};
