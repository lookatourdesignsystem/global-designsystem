import { css } from "@emotion/react";
import FundMastercardIcon1x from "../assets/icons/image_icon/fund/mastercard/@1x.png";
import FundMastercardIcon2x from "../assets/icons/image_icon/fund/mastercard/@2x.png";
import FundMastercardIcon3x from "../assets/icons/image_icon/fund/mastercard/@3x.png";

const FundMastercardIcon = ({
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
      src={FundMastercardIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundMastercardIcon2x} 2x, ${FundMastercardIcon3x} 3x`}
      alt={alt || "FundMastercardIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundMastercardIcon;
