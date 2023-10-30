import { css } from "@emotion/react";
import FunddetailsNftSellIcon1x from "../assets/icons/image_icon/funddetails/nft_sell/@1x.png";
import FunddetailsNftSellIcon2x from "../assets/icons/image_icon/funddetails/nft_sell/@2x.png";
import FunddetailsNftSellIcon3x from "../assets/icons/image_icon/funddetails/nft_sell/@3x.png";

const FunddetailsNftSellIcon = ({
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
      src={FunddetailsNftSellIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FunddetailsNftSellIcon2x} 2x, ${FunddetailsNftSellIcon3x} 3x`}
      alt={alt || "FunddetailsNftSellIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FunddetailsNftSellIcon;
