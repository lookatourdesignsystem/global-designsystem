import { css } from "@emotion/react";
import FundCardIcon1x from "../assets/icons/image_icon/fund/card/@1x.png";
import FundCardIcon2x from "../assets/icons/image_icon/fund/card/@2x.png";
import FundCardIcon3x from "../assets/icons/image_icon/fund/card/@3x.png";

const FundCardIcon = ({
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
      src={FundCardIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundCardIcon2x} 2x, ${FundCardIcon3x} 3x`}
      alt={alt || "FundCardIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundCardIcon;
