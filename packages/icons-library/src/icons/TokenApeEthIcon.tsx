import { css } from "@emotion/react";
import TokenApeEthIcon1x from "../assets/icons/image_icon/token/ape/eth/@1x.png";
import TokenApeEthIcon2x from "../assets/icons/image_icon/token/ape/eth/@2x.png";
import TokenApeEthIcon3x from "../assets/icons/image_icon/token/ape/eth/@3x.png";

const TokenApeEthIcon = ({
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
      src={TokenApeEthIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenApeEthIcon2x} 2x, ${TokenApeEthIcon3x} 3x`}
      alt={alt || "TokenApeEthIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenApeEthIcon;
