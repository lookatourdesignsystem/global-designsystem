import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { AccordionDetails } from "./AccordionDetails";
import { AccordionSummary } from "./AccordionSummary";
import { AccordionDiv } from "./styles";

export interface AccordionProps {
  item: {
    summary: ReactNode;
    details: ReactNode;
    disabled?: boolean;
    initialExpanded?: boolean;
  };
  icon: ReactNode;
  onChange?: (newExpanded: boolean) => void;
  expanded?: boolean;
  detailTransition?: string;
  activeMargin?: string;
  accordionStyle?: string;
  summaryStyle?: string;
  detailsStyle?: string;
  iconStyle?: string;
  selectiveIcon?: (expanded: boolean) => ReactNode;
  className?: string;
  testid?: string;
}

export const Accordion = ({
  item,
  icon,
  onChange,
  expanded,
  detailTransition,
  activeMargin,
  accordionStyle,
  summaryStyle,
  detailsStyle,
  iconStyle,
  selectiveIcon,
  className,
  testid,
}: AccordionProps) => {
  const theme = useTheme();
  const [active, setActive] = useState<boolean>(false);

  const handleChange = () => {
    if (onChange) {
      onChange(!expanded || false);
      return;
    }
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (item.initialExpanded === true) {
      setActive(true);
    }
  }, []);

  return (
    <AccordionDiv
      className={getJoinedClassName("Accordion", {
        className:
          expanded || active ? `AccordionExpanded ${className}` : className,
      })}
      activeMargin={activeMargin}
      accordionStyle={accordionStyle}
      theme={theme}
      data-testid={testid}
    >
      <AccordionSummary
        icon={icon}
        expanded={expanded !== undefined ? expanded : active}
        disabled={item.disabled}
        onClick={() => !item.disabled && handleChange()}
        summaryStyle={summaryStyle}
        selectiveIcon={selectiveIcon}
        iconStyle={iconStyle}
      >
        {item.summary}
      </AccordionSummary>
      <AccordionDetails
        expanded={expanded !== undefined ? expanded : active}
        detailTransition={detailTransition}
        detailsStyle={detailsStyle}
      >
        {item.details}
      </AccordionDetails>
    </AccordionDiv>
  );
};
