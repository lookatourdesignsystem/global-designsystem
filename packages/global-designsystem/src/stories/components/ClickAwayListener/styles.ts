import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { Box } from "../Box";

export const StyledClickAwayListenerDiv = styled.div`
  display: inline-block;
`;

export const StyledContainerBox = styled(Box)`
  position: relative;
`;

export const StyledTooltip = styled(Box)<{ theme: ThemeOptions }>`
  ${({ theme }) => `
  position: absolute;
  top: calc(100% + ${theme.spacing[100]}px);
  left: 0;
  right: 50%;
  text-align: center;
  background-color: ${theme.colors.system.warning.main};
  border-radius: ${theme.shape.borderRadius[200]}px;
  z-index: 10;
`}
`;
