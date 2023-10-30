import styled from "@emotion/styled";
import { ThemeOptions } from "../../../modules/defaultTheme";
import { MutableRefObject } from "react";

export const StyledTabsContainer = styled.div<{
  width?: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  fullWidth: boolean;
}>`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  ${({ width }) => width && `width : ${width}`};
  & > button {
    ${({ fullWidth }) => `${fullWidth && "flex: 1;"}`}
  }
`;
export const StyledTabs = styled.button<{
  theme: ThemeOptions;
  activeTab: boolean;
  size: "xs" | "s" | "m" | "l";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.colors.text.main};

  ${({ theme, activeTab, size }) => `
    height: ${theme.size[size]}px;
    padding: 0px ${
      size === "l"
        ? theme.spacing[400]
        : size === "xs"
        ? theme.spacing[200]
        : theme.spacing[300]
    }px;
    opacity: ${activeTab ? 1 : theme.colors.interactive.disabled};
    border-color: ${
      activeTab === true ? theme.colors.gray[1000] : "transparent"
    };
`}
`;
