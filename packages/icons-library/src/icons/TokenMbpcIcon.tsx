import { css } from "@emotion/react";
import TokenMbpcIcon1x from "../assets/icons/image_icon/token/mbpc/@1x.png";
import TokenMbpcIcon2x from "../assets/icons/image_icon/token/mbpc/@2x.png";
import TokenMbpcIcon3x from "../assets/icons/image_icon/token/mbpc/@3x.png";

const TokenMbpcIcon = ({
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
      src={TokenMbpcIcon1x}
      width={fontSize}
      height={fontSize}
      srcSet={`${TokenMbpcIcon2x} 2x, ${TokenMbpcIcon3x} 3x`}
      alt={alt || "TokenMbpcIcon"}
      className={className}
      css={css`
        object-fit: contain;
      `}
    />
  );
};

export default TokenMbpcIcon;
