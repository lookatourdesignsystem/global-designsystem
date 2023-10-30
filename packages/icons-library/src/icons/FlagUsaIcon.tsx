import { css } from "@emotion/react";
import FlagUsaIcon1x from "../assets/icons/image_icon/flag/usa/@1x.png";
import FlagUsaIcon2x from "../assets/icons/image_icon/flag/usa/@2x.png";
import FlagUsaIcon3x from "../assets/icons/image_icon/flag/usa/@3x.png";

const FlagUsaIcon = ({
  fontSize,
  className,
  alt,
}: {
  fontSize?: number;
  className?: string;
  alt?: string;
}) => {
  return (
    <img
      src={FlagUsaIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FlagUsaIcon2x} 2x, ${FlagUsaIcon3x} 3x`}
      alt={alt || "FlagUsaIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FlagUsaIcon;
