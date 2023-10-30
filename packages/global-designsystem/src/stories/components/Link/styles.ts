import { ThemeOptions } from "../../../modules/defaultTheme";
import { hexToRgba } from "@lookatourdesignsystem/utils-library";
import styled from "@emotion/styled";

export const StyledLinkA = styled.a<{
  theme: ThemeOptions;
  disabled: boolean;
}>`
  color: ${({ theme }) => theme.colors.text.link};
  cursor: pointer;
  position: relative;

  &.underline:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.link};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.text.link, 0.7)};

    &:after {
      background-color: ${({ theme }) =>
        hexToRgba(theme.colors.primary.main, 0.7)};
    }
  }

  &[disabled] {
    color: ${({ theme }) => theme.colors.text.disabled};
    pointer-events: none;

    &:after {
      background-color: ${({ theme }) => theme.colors.text.disabled};
    }
  }

  & > svg,
  img {
    display: inline;
  }

  & > .rightIcon {
    margin-left: ${({ theme }) => theme.spacing[100]}px;
  }

  & > .leftIcon {
    margin-right: ${({ theme }) => theme.spacing[100]}px;
  }
`;
