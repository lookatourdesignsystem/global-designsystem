import { css } from "@emotion/react";
import TokenMetaIcon1x from "../assets/icons/image_icon/token/meta/@1x.png";
import TokenMetaIcon2x from "../assets/icons/image_icon/token/meta/@2x.png";
import TokenMetaIcon3x from "../assets/icons/image_icon/token/meta/@3x.png";

const TokenMetaIcon = ({
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
      src={TokenMetaIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenMetaIcon2x} 2x, ${TokenMetaIcon3x} 3x`}
      alt={alt || "TokenMetaIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenMetaIcon;
