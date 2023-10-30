import { css } from "@emotion/react";
import TokenEthDefaultIcon1x from "../assets/icons/image_icon/token/eth/default/@1x.png";
import TokenEthDefaultIcon2x from "../assets/icons/image_icon/token/eth/default/@2x.png";
import TokenEthDefaultIcon3x from "../assets/icons/image_icon/token/eth/default/@3x.png";

const TokenEthDefaultIcon = ({
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
      src={TokenEthDefaultIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenEthDefaultIcon2x} 2x, ${TokenEthDefaultIcon3x} 3x`}
      alt={alt || "TokenEthDefaultIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenEthDefaultIcon;
