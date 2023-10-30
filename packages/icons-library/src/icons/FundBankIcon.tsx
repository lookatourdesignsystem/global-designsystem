import { css } from "@emotion/react";
import FundBankIcon1x from "../assets/icons/image_icon/fund/bank/@1x.png";
import FundBankIcon2x from "../assets/icons/image_icon/fund/bank/@2x.png";
import FundBankIcon3x from "../assets/icons/image_icon/fund/bank/@3x.png";

const FundBankIcon = ({
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
      src={FundBankIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundBankIcon2x} 2x, ${FundBankIcon3x} 3x`}
      alt={alt || "FundBankIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundBankIcon;
