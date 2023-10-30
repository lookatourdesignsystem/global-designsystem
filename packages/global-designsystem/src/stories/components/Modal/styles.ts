import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { motion } from "framer-motion/dist/framer-motion";
import { BreakpointOptions } from "../../../modules/breakpoints";
import { Box } from "../Box";

const StyledModalContainerDiv = styled(motion.div)<{
  theme: ThemeOptions;
  breakpoints: BreakpointOptions;
  fullScreen?: boolean;
  borderWidth?: number;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  outline: 0;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.shape.borderRadius[400]}px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background.elevated};
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-color: ${({ theme }) => theme.colors.border};
  ${({ fullScreen }) =>
    fullScreen &&
    `
    height: 100%;
    border-radius: 0;
  `};

  ${({ breakpoints }) => breakpoints.up("sm")} {
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(50%) !important;
    border-bottom-right-radius: ${({ theme }) =>
      theme.shape.borderRadius[400]}px;
    border-bottom-left-radius: ${({ theme }) =>
      theme.shape.borderRadius[400]}px;
    width: auto;
    max-height: calc(
      100% -
        ${({ theme, fullScreen }) => (fullScreen ? 0 : theme.spacing[1000])}px
    );
    max-width: calc(
      100% -
        ${({ theme, fullScreen }) => (fullScreen ? 0 : theme.spacing[1000])}px
    );
    ${({ fullScreen }) =>
      fullScreen &&
      `
       border-radius: 0;
    `};
  }
`;

const StyledModalContentDiv = styled(Box)<{
  isFixBottom: boolean;
  isHeader: boolean;
  theme: ThemeOptions;
}>`
  margin: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing[500]}px;
  padding-right: ${({ theme }) => theme.spacing[500]}px;
  padding-top: ${({ isHeader, theme }) =>
    isHeader ? theme.spacing[200] : theme.spacing[500]}px;
  padding-bottom: ${({ isFixBottom, theme }) =>
    isFixBottom ? theme.spacing[200] : theme.spacing[500]}px;
`;

const StyledModalHeaderDiv = styled.div<{
  theme: ThemeOptions;
}>`
  padding: ${({ theme }) =>
    `${theme.spacing[500]}px ${theme.spacing[500]}px ${theme.spacing[200]}px`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTruncateTypoDiv = styled.div`
  overflow: hidden;
  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export {
  StyledModalContainerDiv,
  StyledModalContentDiv,
  StyledModalHeaderDiv,
  StyledTruncateTypoDiv,
};
