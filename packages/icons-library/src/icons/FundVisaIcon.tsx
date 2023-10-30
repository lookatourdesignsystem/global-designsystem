import { css } from "@emotion/react";
import FundVisaIcon1x from "../assets/icons/image_icon/fund/visa/@1x.png";
import FundVisaIcon2x from "../assets/icons/image_icon/fund/visa/@2x.png";
import FundVisaIcon3x from "../assets/icons/image_icon/fund/visa/@3x.png";

const FundVisaIcon = ({
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
      src={FundVisaIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundVisaIcon2x} 2x, ${FundVisaIcon3x} 3x`}
      alt={alt || "FundVisaIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundVisaIcon;
