import { css } from "@emotion/react";
import TokenTronIcon1x from "../assets/icons/image_icon/token/tron/@1x.png";
import TokenTronIcon2x from "../assets/icons/image_icon/token/tron/@2x.png";
import TokenTronIcon3x from "../assets/icons/image_icon/token/tron/@3x.png";

const TokenTronIcon = ({
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
      src={TokenTronIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenTronIcon2x} 2x, ${TokenTronIcon3x} 3x`}
      alt={alt || "TokenTronIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenTronIcon;
