import { css } from "@emotion/react";
import FundMastercardTextfieldIcon1x from "../assets/icons/image_icon/fund/mastercard_textfield/@1x.png";
import FundMastercardTextfieldIcon2x from "../assets/icons/image_icon/fund/mastercard_textfield/@2x.png";
import FundMastercardTextfieldIcon3x from "../assets/icons/image_icon/fund/mastercard_textfield/@3x.png";

const FundMastercardTextfieldIcon = ({
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
      src={FundMastercardTextfieldIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundMastercardTextfieldIcon2x} 2x, ${FundMastercardTextfieldIcon3x} 3x`}
      alt={alt || "FundMastercardTextfieldIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundMastercardTextfieldIcon;
