import { MutableRefObject, ReactNode, useEffect } from "react";
import { ButtonColors } from "../../../types";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { StyledButton, StyledButtonGroupDiv } from "./styles";
import { useScrollIntoView } from "src/hooks/components";

export interface ButtonGroupProps {
  items: string[] | ReactNode[];
  direction?: "horizontal" | "vertical";
  color?: ButtonColors;
  selectedIndex: number;
  icon?: boolean;
  fullWidth?: boolean;
  width?: string;
  scrollable?: boolean;
  initialFocus?: boolean;
  size?: "s" | "m" | "l";
  onChange: (activeButton: number) => void;
  className?: string;
  testid?: string;
}

export const ButtonGroup = ({
  items,
  direction = "horizontal",
  color = "default",
  selectedIndex,
  size = "m",
  icon = false,
  fullWidth = false,
  width,
  scrollable = false,
  initialFocus = scrollable ? true : false,
  onChange,
  className,
  testid,
}: ButtonGroupProps) => {
  const [scrollableRef, setShouldScrollTo] = useScrollIntoView({
    target: ".button-selected",
    horizontal: "start",
    disabled: !scrollable,
  });

  useEffect(() => {
    if (initialFocus) setShouldScrollTo(true);
  }, []);

  return (
    <StyledButtonGroupDiv
      ref={scrollableRef as MutableRefObject<HTMLDivElement | null>}
      className={getJoinedClassName("ButtonGroup", { className })}
      direction={direction}
      size={size}
      icon={icon}
      width={width}
      fullWidth={fullWidth}
      data-testid={testid}
    >
      {items &&
        items.map((item, i) => {
          return (
            <StyledButton
              key={i}
              size={size === "l" ? "s" : size === "m" ? "xs" : "xxs"}
              color={color}
              variant={i === selectedIndex ? "solid" : "outlined"}
              direction={direction}
              onClick={() => {
                onChange(i);
                if (scrollable) setShouldScrollTo(true);
              }}
              icon={icon}
              className={`${i === selectedIndex && "button-selected"}`}
            >
              {item}
            </StyledButton>
          );
        })}
    </StyledButtonGroupDiv>
  );
};
