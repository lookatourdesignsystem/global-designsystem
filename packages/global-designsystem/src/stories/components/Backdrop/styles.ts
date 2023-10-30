import styled from "@emotion/styled";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledBackdropDiv = styled(motion.div)<{
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
