import styled from "@emotion/styled";
import { RefObject } from "react";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { Box } from "../Box";

export const StyledSectionDiv = styled(Box)<{
  even: boolean;
  theme: ThemeOptions;
  ref: RefObject<HTMLDivElement>;
}>`
  width: 100%;
  height: 80vh;
  background-color: ${({ even, theme }) =>
    even ? theme.colors.gray[800] : theme.colors.gray[1000]};
`;
