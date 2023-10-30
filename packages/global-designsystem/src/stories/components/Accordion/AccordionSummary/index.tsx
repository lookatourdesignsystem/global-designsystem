import { css, keyframes } from "@emotion/react";
import { ReactNode } from "react";
import { useTheme } from "../../../../hooks/useTheme";
import { Spacer } from "../../Spacer";
import { Stack } from "../../Stack";
import { Transition } from "../../Transition";
import {
  StyledAccordionSummary,
  StyledSummaryIcon,
  StyledSummaryTitle,
} from "../styles";

const windUp = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-180deg);
  }
`;

const rewind = keyframes`
   0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0);
  }

`;

export const AccordionSummary = ({
  icon,
  children,
  expanded,
  onClick,
  disabled = false,
  summaryStyle,
  iconStyle,
  selectiveIcon,
}: {
  icon: ReactNode;
  children: ReactNode;
  expanded: boolean;
  onClick: (expanded: boolean) => void;
  disabled?: boolean;
  summaryStyle?: string;
  iconStyle?: string;
  selectiveIcon?: (expanded: boolean) => ReactNode;
}) => {
  const theme = useTheme();

  return (
    <StyledAccordionSummary
      disabled={disabled}
      summaryStyle={summaryStyle}
      theme={theme}
      className="AccordionSummary"
      onClick={(e) => onClick(!expanded)}
    >
      <Stack
        direction="row"
        pt="500"
        pb="500"
        alignItems="center"
        justifyContent="flex-start"
      >
        <StyledSummaryTitle
          expanded={expanded}
          theme={theme}
          css={{ fontWeight: 700 }}
        >
          {children}
        </StyledSummaryTitle>
        <Spacer flexGrow={1} />
        <Transition
          inTransition={expanded}
          timeout={250}
          customType="CollapseY"
          unmountOnExit={false}
        >
          <StyledSummaryIcon
            css={css`
              &.CollapseY-enter-active {
                animation: ${windUp} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
              }
              &.CollapseY-enter-done {
                transform: rotate(-180deg);
              }
              &.CollapseY-exit-active {
                animation: ${rewind} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
              }
            `}
            className={[
              "AccordionSummaryIcon",
              expanded
                ? "AccordionSummaryIconActive"
                : "AccordionSummaryIconInactive",
            ].join(" ")}
            iconStyle={iconStyle}
            expanded={expanded}
          >
            {selectiveIcon ? selectiveIcon(expanded) : icon}
          </StyledSummaryIcon>
        </Transition>
      </Stack>
    </StyledAccordionSummary>
  );
};
