import { css } from "@emotion/react";
import FundCoinbaseIcon1x from "../assets/icons/image_icon/fund/coinbase/@1x.png";
import FundCoinbaseIcon2x from "../assets/icons/image_icon/fund/coinbase/@2x.png";
import FundCoinbaseIcon3x from "../assets/icons/image_icon/fund/coinbase/@3x.png";

const FundCoinbaseIcon = ({
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
      src={FundCoinbaseIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundCoinbaseIcon2x} 2x, ${FundCoinbaseIcon3x} 3x`}
      alt={alt || "FundCoinbaseIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundCoinbaseIcon;
