import { SpacingMultiple, SpacingOptions } from "../types";

export const spacingMultiples: SpacingMultiple[] = [
  "50",
  "100",
  "200",
  "300",
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

export const createSpacing = (base: number) => {
  let spacing: any = {};
  for (let multiple of spacingMultiples) {
    let size = base * (Number(multiple) / 100);
    spacing[multiple] = size;
  }

  return spacing as SpacingOptions;
};
