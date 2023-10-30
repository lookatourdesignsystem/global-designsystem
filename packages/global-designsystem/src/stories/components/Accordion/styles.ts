import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { Box } from "../Box";

export const AccordionDiv = styled.div<{
  theme: ThemeOptions;
  accordionStyle?: string;
  activeMargin?: string;
}>`
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 20%);
  transition: margin 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: transparent;
  &.AccordionExpanded {
    margin: ${({ activeMargin }) =>
      activeMargin !== undefined
        ? `${activeMargin.trim()} `.replaceAll(" ", "px ")
        : 0};
  }
  &.AccordionExpanded:first-of-type {
    margin-top: 0;
  }
  &.AccordionExpanded:last-of-type {
    margin-bottom: 0;
  }
  ${(props) => (props.accordionStyle ? props.accordionStyle : "")}
`;

export const StyledSummaryIcon = styled.div<{
  iconStyle?: string;
  expanded: boolean;
}>`
  ${({ iconStyle, expanded }) => `
    &.AccordionSummaryIcon.AccordionSummaryIcon${
      expanded ? "Active" : "Inactive"
    } {
      ${iconStyle ? iconStyle : ""}
    }
  `}
`;

export const StyledDetailsDiv = styled.div<{
  theme: ThemeOptions;
  height: number;
}>`
  z-index: 1;
  position: relative;
  border-top: none;
  background-color: inherit;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 500ms ease;
  &.Expanded-enter-active,
  &.Expanded-enter-done {
    opacity: 1;
    max-height: ${({ height }) => height}px;
  }
  &.Expanded-exit-active {
    max-height: 0;
    opacity: 0;
  }
`;

export const StyledAccordionSummary = styled(Box)<{
  theme: ThemeOptions;
  disabled: boolean;
  summaryStyle?: string;
}>`
  z-index: 2;
  border-bottom: none;
  background-color: transparent;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "initial" : "pointer")};
  ${({ summaryStyle }) => (summaryStyle ? summaryStyle : "")};
`;

export const StyledSummaryTitle = styled(Box)<{
  theme: ThemeOptions;
  expanded: boolean;
}>``;

export const StyledDetailsContentDiv = styled.div`
  margin-bottom: 20px;
  transition: margin 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
