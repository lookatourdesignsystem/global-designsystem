import {
  Fragment,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from "react";
import { useTheme } from "../../../hooks/useTheme";
import { getJoinedClassName } from "@lookatourdesignsystem/utils-library";
import { PeopleFilledIcon } from "@lookatourdesignsystem/icons-library";
import { StyledAvatarDiv, StyledAvatarImg } from "./styles";
import { AvatarVariant, BorderRadiusMultiple, SizeType } from "src/types";

export interface AvatarProps {
  alt?: string;
  src?: string;
  icon?: ReactNode;
  backgroundColor?: string;
  size?: SizeType | "xxl";
  borderRadius?: BorderRadiusMultiple;
  children?: ReactNode;
  className?: string;
  testid?: string;
}

export const Avatar = ({
  alt,
  src,
  icon,
  backgroundColor,
  size = "xxs",
  borderRadius = "circle",
  children,
  className,
  testid,
}: AvatarProps) => {
  const theme = useTheme();
  const [isError, setIsError] = useState(false);
  const avatarStyle = {
    xxs: { circleSize: 24, iconSize: 16, variant: "overline" },
    xs: { circleSize: 36, iconSize: 24, variant: "subtitle2" },
    s: { circleSize: 48, iconSize: 32, variant: "subtitle1" },
    m: { circleSize: 56, iconSize: 36, variant: "h6" },
    l: { circleSize: 72, iconSize: 44, variant: "h5" },
    xl: { circleSize: 88, iconSize: 52, variant: "h4" },
    xxl: { circleSize: 104, iconSize: 64, variant: "h3" },
  };
  const showImage = src !== undefined && isError === false;
  const showIcon = icon !== undefined;
  const showFallbackIcon =
    (src !== undefined && isError === true && children === undefined) ||
    (src === undefined && children === undefined);

  const getClassNames = (variant: AvatarVariant, className?: string) => {
    let classNames = [];

    if (variant) {
      classNames.push(`typography-default-${variant}`);
    }

    if (className) {
      classNames.push(className);
    }

    return classNames.join(" ");
  };

  return (
    <StyledAvatarDiv
      theme={theme}
      backgroundColor={backgroundColor}
      circleSize={avatarStyle[size].circleSize}
      borderRadius={theme.shape.borderRadius[borderRadius]}
      className={getJoinedClassName("Avatar", {
        className: getClassNames(
          avatarStyle[size].variant as AvatarVariant,
          className
        ),
      })}
      data-testid={testid}
    >
      {showImage ? (
        <StyledAvatarImg
          src={src}
          alt={alt}
          onError={() => {
            setIsError(true);
          }}
        />
      ) : showIcon ? (
        <Fragment>
          {cloneElement(icon as ReactElement, {
            fontSize: avatarStyle[size].iconSize,
          })}
        </Fragment>
      ) : showFallbackIcon ? (
        <PeopleFilledIcon
          fontSize={avatarStyle[size].iconSize}
          color={theme.colors.gray[300]}
        />
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </StyledAvatarDiv>
  );
};
