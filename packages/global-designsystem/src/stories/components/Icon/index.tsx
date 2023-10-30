import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import styled from "@emotion/styled";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";

export interface IconProps {
  color?: string;
  children: ReactNode;
  className?: string;
  fontSize?: number;
}

const IconComp = ({ color, children, className, fontSize = 24 }: IconProps) => {
  const childrenWithProps = Children.map(
    children as ReactElement,
    (child: ReactElement<PropsWithChildren<IconProps>>) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          color,
          fontSize,
          className: getJoinedClassName("Icon", {
            className,
          }),
        });
      }

      return child;
    }
  );
  return <Fragment>{childrenWithProps}</Fragment>;
};

export const Icon = styled(IconComp)<IconProps>`
  width: 1em;
  height: 1em;
  & path {
    fill: ${({ color }) => (color ? color : "currentColor")};
  }
  ${({ fontSize }) =>
    fontSize && `min-width: ${fontSize}px; font-size: ${fontSize}px;`};
`;
