import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { motion } from "framer-motion/dist/framer-motion";

const StyledBottomSheetDiv = styled.div``;

const StyledBottomSheetContainerDiv = styled(motion.div)<{
  isOpened: boolean;
  borderRadius?: number;
  theme: ThemeOptions;
  fullScreen?: boolean;
  borderWidth?: number;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  outline: 0;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
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
`;

const StyledBottomSheetContentDiv = styled.div<{
  isFixBottom: boolean;
  isHeader: boolean;
  theme: ThemeOptions;
}>`
  position: relative;
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

const StyledBottomSheetHeaderDiv = styled.div<{
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

const StyledBackdropDiv = styled(motion.div)<{
  color: string;
}>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export {
  StyledBottomSheetDiv,
  StyledBottomSheetContainerDiv,
  StyledBottomSheetContentDiv,
  StyledBottomSheetHeaderDiv,
  StyledTruncateTypoDiv,
  StyledBackdropDiv,
};
