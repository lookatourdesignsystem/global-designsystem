import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledDrawerDiv = styled(motion.div)<{
  fullScreen?: boolean;
  direction: "left" | "right";
  theme: ThemeOptions;
}>`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${({ fullScreen }) => (fullScreen ? "100%" : "300px")};
  height: 100%;
  background: ${({ theme }) => theme.colors.background.elevated};
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")};
`;

export const StyledDrawerContentDiv = styled.div<{
  backgroundColor: string;
}>`
  overflow-y: auto;
  flex: 1;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledDrawerHeaderDiv = styled.div<{ backgroundColor: string }>`
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledDrawerFooterDiv = styled.div<{ backgroundColor: string }>`
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledBackdropDiv = styled.div<{ color: string }>`
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
