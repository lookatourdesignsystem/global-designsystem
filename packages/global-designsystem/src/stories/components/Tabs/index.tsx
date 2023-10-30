import { MutableRefObject, ReactNode, useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledTabs, StyledTabsContainer } from "./styles";
import { useScrollIntoView } from "src/hooks/components";

export interface TabsProps {
  items: string[] | ReactNode[];
  selectedIndex: number;
  onChange: (activeTab: number) => void;
  size?: "xs" | "s" | "m" | "l";
  fullWidth?: boolean;
  width?: string;
  scrollable?: boolean;
  initialFocus?: boolean;
  className?: string;
  testid?: string;
}

export const Tabs = ({
  items,
  selectedIndex,
  size = "m",
  onChange,
  fullWidth = false,
  width,
  scrollable = false,
  initialFocus = scrollable ? true : false,
  className,
  testid,
}: TabsProps) => {
  const theme = useTheme();
  const tabsStyle = {
    xs: { variant: "caption1" },
    s: { variant: "subtitle2" },
    m: { variant: "subtitle1" },
    l: { variant: "h6" },
  };
  const [scrollableRef, setShouldScrollTo] = useScrollIntoView({
    target: ".tab-selected",
    horizontal: "start",
    disabled: !scrollable,
  });

  useEffect(() => {
    if (initialFocus) setShouldScrollTo(true);
  }, []);

  return (
    <StyledTabsContainer
      ref={scrollableRef as MutableRefObject<HTMLDivElement | null>}
      width={width}
      fullWidth={fullWidth}
      className={getJoinedClassName("Tabs", { className })}
      data-testid={testid}
    >
      {items.map((item, i) => {
        return (
          <StyledTabs
            theme={theme}
            key={i}
            activeTab={i === selectedIndex}
            size={size}
            className={`tab typography-default-${tabsStyle[size].variant} ${
              i === selectedIndex && "tab-selected"
            }`}
            onClick={() => {
              onChange(i);
              if (scrollable) setShouldScrollTo(true);
            }}
          >
            {item}
          </StyledTabs>
        );
      })}
    </StyledTabsContainer>
  );
};
