import { css } from "@emotion/react";
import FunddetailsFundsWithdrawIcon1x from "../assets/icons/image_icon/funddetails/funds_withdraw/@1x.png";
import FunddetailsFundsWithdrawIcon2x from "../assets/icons/image_icon/funddetails/funds_withdraw/@2x.png";
import FunddetailsFundsWithdrawIcon3x from "../assets/icons/image_icon/funddetails/funds_withdraw/@3x.png";

const FunddetailsFundsWithdrawIcon = ({
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
      src={FunddetailsFundsWithdrawIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FunddetailsFundsWithdrawIcon2x} 2x, ${FunddetailsFundsWithdrawIcon3x} 3x`}
      alt={alt || "FunddetailsFundsWithdrawIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FunddetailsFundsWithdrawIcon;
