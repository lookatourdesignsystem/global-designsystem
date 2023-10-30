import { css } from "@emotion/react";
import ChainTronIcon1x from "../assets/icons/image_icon/chain/tron/@1x.png";
import ChainTronIcon2x from "../assets/icons/image_icon/chain/tron/@2x.png";
import ChainTronIcon3x from "../assets/icons/image_icon/chain/tron/@3x.png";

const ChainTronIcon = ({
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
      src={ChainTronIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${ChainTronIcon2x} 2x, ${ChainTronIcon3x} 3x`}
      alt={alt || "ChainTronIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default ChainTronIcon;
