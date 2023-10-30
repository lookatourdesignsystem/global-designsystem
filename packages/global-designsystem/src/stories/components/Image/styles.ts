import styled from "@emotion/styled";
import { RefObject } from "react";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { Box } from "../Box";

export const ImageBox = styled(Box)<{ ref: RefObject<HTMLDivElement> }>`
  width: calc(100vw - 32px);
  height: 80vh;
  overflow: auto;
  border: 3px solid red;
`;

export const Section = styled(Box)<{ theme: ThemeOptions }>`
  display: block;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;
