import { css } from "@emotion/react";
import ChainEthIcon1x from "../assets/icons/image_icon/chain/eth/@1x.png";
import ChainEthIcon2x from "../assets/icons/image_icon/chain/eth/@2x.png";
import ChainEthIcon3x from "../assets/icons/image_icon/chain/eth/@3x.png";

const ChainEthIcon = ({
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
      src={ChainEthIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainEthIcon2x} 2x, ${ChainEthIcon3x} 3x`}
      alt={alt || "ChainEthIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainEthIcon;
