import { css } from "@emotion/react";
import ChainBscIcon1x from "../assets/icons/image_icon/chain/bsc/@1x.png";
import ChainBscIcon2x from "../assets/icons/image_icon/chain/bsc/@2x.png";
import ChainBscIcon3x from "../assets/icons/image_icon/chain/bsc/@3x.png";

const ChainBscIcon = ({
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
      src={ChainBscIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainBscIcon2x} 2x, ${ChainBscIcon3x} 3x`}
      alt={alt || "ChainBscIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainBscIcon;
