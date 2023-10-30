import { css } from "@emotion/react";
import FundVisaTextfieldIcon1x from "../assets/icons/image_icon/fund/visa_textfield/@1x.png";
import FundVisaTextfieldIcon2x from "../assets/icons/image_icon/fund/visa_textfield/@2x.png";
import FundVisaTextfieldIcon3x from "../assets/icons/image_icon/fund/visa_textfield/@3x.png";

const FundVisaTextfieldIcon = ({
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
      src={FundVisaTextfieldIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundVisaTextfieldIcon2x} 2x, ${FundVisaTextfieldIcon3x} 3x`}
      alt={alt || "FundVisaTextfieldIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundVisaTextfieldIcon;
