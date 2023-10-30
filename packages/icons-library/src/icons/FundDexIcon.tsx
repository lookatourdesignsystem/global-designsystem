import { css } from "@emotion/react";
import FundDexIcon1x from "../assets/icons/image_icon/fund/dex/@1x.png";
import FundDexIcon2x from "../assets/icons/image_icon/fund/dex/@2x.png";
import FundDexIcon3x from "../assets/icons/image_icon/fund/dex/@3x.png";

const FundDexIcon = ({
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
      src={FundDexIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${FundDexIcon2x} 2x, ${FundDexIcon3x} 3x`}
      alt={alt || "FundDexIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default FundDexIcon;
