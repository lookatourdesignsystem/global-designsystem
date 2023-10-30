import { css } from "@emotion/react";
import FunddetailsBoxBuyIcon1x from "../assets/icons/image_icon/funddetails/box_buy/@1x.png";
import FunddetailsBoxBuyIcon2x from "../assets/icons/image_icon/funddetails/box_buy/@2x.png";
import FunddetailsBoxBuyIcon3x from "../assets/icons/image_icon/funddetails/box_buy/@3x.png";

const FunddetailsBoxBuyIcon = ({
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
      src={FunddetailsBoxBuyIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FunddetailsBoxBuyIcon2x} 2x, ${FunddetailsBoxBuyIcon3x} 3x`}
      alt={alt || "FunddetailsBoxBuyIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FunddetailsBoxBuyIcon;
