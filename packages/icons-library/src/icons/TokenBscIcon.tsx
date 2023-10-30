import { css } from "@emotion/react";
import TokenBscIcon1x from "../assets/icons/image_icon/token/bsc/@1x.png";
import TokenBscIcon2x from "../assets/icons/image_icon/token/bsc/@2x.png";
import TokenBscIcon3x from "../assets/icons/image_icon/token/bsc/@3x.png";

const TokenBscIcon = ({
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
      src={TokenBscIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenBscIcon2x} 2x, ${TokenBscIcon3x} 3x`}
      alt={alt || "TokenBscIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenBscIcon;
