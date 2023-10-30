import { css } from "@emotion/react";
import TokenRtIcon1x from "../assets/icons/image_icon/token/rt/@1x.png";
import TokenRtIcon2x from "../assets/icons/image_icon/token/rt/@2x.png";
import TokenRtIcon3x from "../assets/icons/image_icon/token/rt/@3x.png";

const TokenRtIcon = ({
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
      src={TokenRtIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenRtIcon2x} 2x, ${TokenRtIcon3x} 3x`}
      alt={alt || "TokenRtIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenRtIcon;
