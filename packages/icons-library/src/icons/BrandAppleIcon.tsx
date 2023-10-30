import { css } from "@emotion/react";
import BrandAppleIcon1x from "../assets/icons/image_icon/brand/apple/@1x.png";
import BrandAppleIcon2x from "../assets/icons/image_icon/brand/apple/@2x.png";
import BrandAppleIcon3x from "../assets/icons/image_icon/brand/apple/@3x.png";

const BrandAppleIcon = ({
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
      src={BrandAppleIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${BrandAppleIcon2x} 2x, ${BrandAppleIcon3x} 3x`}
      alt={alt || "BrandAppleIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default BrandAppleIcon;
