import { css } from "@emotion/react";
import BrandAndroidIcon1x from "../assets/icons/image_icon/brand/android/@1x.png";
import BrandAndroidIcon2x from "../assets/icons/image_icon/brand/android/@2x.png";
import BrandAndroidIcon3x from "../assets/icons/image_icon/brand/android/@3x.png";

const BrandAndroidIcon = ({
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
      src={BrandAndroidIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${BrandAndroidIcon2x} 2x, ${BrandAndroidIcon3x} 3x`}
      alt={alt || "BrandAndroidIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default BrandAndroidIcon;
