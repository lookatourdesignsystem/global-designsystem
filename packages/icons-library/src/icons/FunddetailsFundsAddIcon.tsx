import { css } from "@emotion/react";
import FunddetailsFundsAddIcon1x from "../assets/icons/image_icon/funddetails/funds_add/@1x.png";
import FunddetailsFundsAddIcon2x from "../assets/icons/image_icon/funddetails/funds_add/@2x.png";
import FunddetailsFundsAddIcon3x from "../assets/icons/image_icon/funddetails/funds_add/@3x.png";

const FunddetailsFundsAddIcon = ({
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
      src={FunddetailsFundsAddIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FunddetailsFundsAddIcon2x} 2x, ${FunddetailsFundsAddIcon3x} 3x`}
      alt={alt || "FunddetailsFundsAddIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FunddetailsFundsAddIcon;
