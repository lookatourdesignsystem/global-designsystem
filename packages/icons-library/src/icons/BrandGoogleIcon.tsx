import { css } from "@emotion/react";
import BrandGoogleIcon1x from "../assets/icons/image_icon/brand/google/@1x.png";
import BrandGoogleIcon2x from "../assets/icons/image_icon/brand/google/@2x.png";
import BrandGoogleIcon3x from "../assets/icons/image_icon/brand/google/@3x.png";

const BrandGoogleIcon = ({
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
      src={BrandGoogleIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${BrandGoogleIcon2x} 2x, ${BrandGoogleIcon3x} 3x`}
      alt={alt || "BrandGoogleIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default BrandGoogleIcon;
