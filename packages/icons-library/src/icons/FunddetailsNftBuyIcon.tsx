import { css } from "@emotion/react";
import FunddetailsNftBuyIcon1x from "../assets/icons/image_icon/funddetails/nft_buy/@1x.png";
import FunddetailsNftBuyIcon2x from "../assets/icons/image_icon/funddetails/nft_buy/@2x.png";
import FunddetailsNftBuyIcon3x from "../assets/icons/image_icon/funddetails/nft_buy/@3x.png";

const FunddetailsNftBuyIcon = ({
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
      src={FunddetailsNftBuyIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FunddetailsNftBuyIcon2x} 2x, ${FunddetailsNftBuyIcon3x} 3x`}
      alt={alt || "FunddetailsNftBuyIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FunddetailsNftBuyIcon;
